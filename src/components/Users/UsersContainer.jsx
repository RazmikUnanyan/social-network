import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import WithAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount,
    getUser
} from "../../Redux/users-selector";



class UsersContainer extends React.Component {
    componentDidMount() {

        const{currentPage, pageSize}= this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber);

    };


    render() {
        return <>
            <Users pageSize={this.props.pageSize}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   isFetching = {this.props.isFetching}

            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
    WithAuthRedirect
)(UsersContainer)

