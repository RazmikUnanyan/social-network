import React from "react";
import loading from "../../../assets/image/loading.png";
import style from "./Preloader.module.css";


let Preloader = () => {
    return (
        <div className={style.prelosder}>
            <img src={loading}/>
        </div>
    )
};

export default Preloader;