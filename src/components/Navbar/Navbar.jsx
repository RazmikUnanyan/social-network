import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SidebarConteiner from "../Sitebar/SidebarContainer";
import profile from "../.././assets/image/profile.png"
import users from "../.././assets/image/users.png"
import message from "../.././assets/image/message.png"
import news from "../.././assets/image/news.png"
import music from "../.././assets/image/music.png"
import settings from "../.././assets/image/settings.png"

const Navbar = () => {

    return (
        <div className={s.navbar}>
            <div className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" >
                        <img src= {profile} />
                        <span> My profile</span>
                    </NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/users" >
                        <img src={users}/>
                        <span> Users</span>
                    </NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/dialogs" >
                        <img src= {message}/>
                        <span> Message</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" >
                        <img src={news}/>
                        <span> News</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/musics" >
                        <img src={music}/>
                        <span> Music</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" >
                        <img src={settings}/>
                         <span> Settings</span>
                    </NavLink>
                </div>

            </div>
            <div className={s.friends}>
                <SidebarConteiner />
            </div>
        </div>
    )

};

export default Navbar;