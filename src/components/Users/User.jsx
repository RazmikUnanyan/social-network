import React from "react";
import style from "./Users.module.css";
import ava from "../../assets/image/ava.png";
import {NavLink} from "react-router-dom";
import Preloader from "../common/ Preloader/Preloader";


const User = ({user, isFetching, followingInProgress, follow, unfollow}) => {
    return (
        <div className={style.usersPage} key={user.id}>
                <div className={style.imgFollow}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : ava} className={style.photoUrl}/>
                        </NavLink>

                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id);
                                      }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id);
                                      }}>Follow</button>}
                    </div>
                </div>
                <div className={style.useraInfo}>

                    <div>
                        {isFetching ?
                            <div className={style.preloader}>
                                <Preloader/>
                            </div> : null}

                        <NavLink to={'/profile/' + user.id}>
                            <div>{user.name}</div>
                        </NavLink>
                        <hr/>
                        <div className={style.status}>{user.status ? user.status : "status"}</div>
                    </div>
                    <div>
                    </div>
                </div>
        </div>)
};

export default User;