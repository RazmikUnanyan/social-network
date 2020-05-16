import {usersAPI} from "../api/api";

const SET_FRIEND = 'friends/SET_FRIEND';
const FOLLOW = 'follow/FOLLOW';
const UNFOLLOW = 'unfollow/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'currentPage/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_CURRENT = 'totalUsersCurrent/SET_TOTAL_USERS_CURRENT';
const TOGGLE_IS_FETHING = 'toggleIsFething/TOGGLE_IS_FETHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'toggleIsFollowing/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    friends: [{name: "Alisa", id: 1, status: null, followed: false},
        {name: "Ivan", id: 2, status: null, followed: false},
        {name: "Dima", id: 3, status: null, followed: false},
        {name: "Masha", id: 4, status: null, followed: true}],
    users: [],
    pageSize: 10,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case SET_FRIEND:
            return {
                ...state,
                friends: state.users.filter(u => u.followed === true)


            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_CURRENT: {
            return {...state, totalUsersCount: action.count}
        }
        case  TOGGLE_IS_FETHING: {
            return {...state, isFetching: action.isFetching}
        }
        case  TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};


export const setFriends = (userId) => ({type: SET_FRIEND});
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_CURRENT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (pageNumber, currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let data = await usersAPI.getUsers(pageNumber, currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));

    dispatch(setTotalUsersCount(data.totalCount));

};


export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
        dispatch(setFriends())

    }
    dispatch(toggleFollowingProgress(false, userId));


};

export const unfollow = (userId) => async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        let response = await usersAPI.unFollow(userId);

        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));

    };


export default usersReducer;