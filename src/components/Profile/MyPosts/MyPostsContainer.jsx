import React from 'react';
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (newMessageBody) => {
            dispatch(addPostActionCreator(newMessageBody))

        }

    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;