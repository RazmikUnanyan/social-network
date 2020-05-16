import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../../common/ Preloader/Preloader";
import ava from "../../../../assets/image/ava.png";
import ProfileStatusHooks from "./ProfileStatusHooks";
import {NavLink} from "react-router-dom";


const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto }) => {

    if (!profile) {
        return <Preloader/>
    }

    const mainPhoto = (e) => {
       if( e.target.files.length){
           savePhoto(e.target.files[0]);
       }
    };

    return (
        <div className={styles.discriptionBlok}>
            <div className={styles.imgGrid}>

                <img className={styles.photo} src={profile.photos.large || ava}/>
                <div  className={styles.updateButton}>
               <input  id={"profilePhoto"} className={styles.buttonPhoto} type={"file"} onChange={mainPhoto}/>
                {isOwner && <label  htmlFor={"profilePhoto"}>UpdatePhoto</label>}
                </div>



            </div>
            <div className={styles.gridIn}>
                <div className={styles.fullName}>{profile.fullName}</div>
                <ProfileStatusHooks className={styles.status} status={status} updateStatus={updateStatus}/>
                <div className={styles.aboutMe}>About Me: {profile.aboutMe}</div>
            </div>
        </div>)
};

export default ProfileInfo;