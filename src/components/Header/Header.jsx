import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({login, isAuth, logout}) => {
    return <header className = {styles.header}>
        <div className={styles.logo}>
            RUgruup
        </div>
        <div className={styles.inputStyle}>
            <input placeholder={'Search'}/>
        </div>
        <div className={styles.loginBlock}>
            {isAuth
                ? <div>{login}  <button onClick={logout}>Log out</button></div>
                : <NavLink className={styles.loginButton} to={'/login'}>Log in</NavLink>}
        </div>
          </header>
};

export default Header;