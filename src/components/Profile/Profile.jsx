import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({profile, status, updateStatus, isOwner, savePhoto }) => {

    return (
        <div className={style.profile}>
            <ProfileInfo savePhoto = {savePhoto} isOwner={isOwner} profile={profile} status = {status} updateStatus={updateStatus}/>
            <MyPostsContainer />

        </div>)
};

export default Profile;