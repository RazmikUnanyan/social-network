import React from 'react';
import style from '../Sidebar.module.css';
import {NavLink} from "react-router-dom";

const MyFriends = ({photos, id, name, img}) => {
    return (
        <div className={style.friendslittle}>

            <div className={style.item}>
                <NavLink to={'/profile/' + id}>
                <img src ={photos.small != null ? photos.small : img}/>
                </NavLink>
                <div className={style.name}>
                    {name}
                </div>
            </div>
        </div>
    )
};

export default MyFriends;