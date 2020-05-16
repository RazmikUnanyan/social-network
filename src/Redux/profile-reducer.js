import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'post/ADD-POST';
const SET_USER_PROFILE = ' profile/SET_USER_PROFILE';
const SET_STATUS = 'status/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'photo/SAVE_PHOTO_SUCCESS';


let initialState = {
    post: [
        {
            id: 1,
            like: 5,
            message: '🎵 Приглашаю тебя на Бесплатный онлайн-Марафон "Основы звукорежиссуры".\n' +
                '\n' +
                '🖐🏻 Привет, меня зовут Юра Фауст. 🎹 Я - обучаю сведению, мастерингу и' +
                ' в целом работе с музыкальной композицией. 🚀 ' +
                'С моей командой мы организовали недельный онлайн-марафон,' +
                ' на котором даже самый новичок научиться основам звукорежиссуры . ' +
                'Могу смело сказать, что это крутейший марафон,' +
                ' на котором вы могли быть. ' +
                '🔥 Места ограничены, так как желающих очень ' +
                'много. Поэтому не упусти свой шанс!'
        }
    ],

    profile:null,
    status: ""
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                like: 0,
                message: action.newMessageBody
            };
            return {
                ...state,
                post: [newPost, ...state.post],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {

                ...state,
                status: action.status
            };

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}

        default:
            return state;
    }

};

export const addPostActionCreator = (newMessageBody) => ({type: ADD_POST, newMessageBody});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const profileThunk = (userId) => async (dispatch) => {
     let response = await usersAPI.profile(userId);
            dispatch(setUserProfile(response.data))

    };

export const getStatus = (userId) => async(dispatch) => {

    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))

    };


export const updateStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
    };

export const savePhoto = (file) => async (dispatch) => {

    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};





export default profileReducer;