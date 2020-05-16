import React from "react";
import s from  './News.module.css';
import Preloader from "../common/ Preloader/Preloader";
import ava from "../../assets/image/ava.jpg";

const News = () => {
    return (
        <div className={s.news}>
            <dev >
                <Preloader />
            </dev>
            <dev>
                is being developed...
            </dev>
        </div>)
}
 export default News;
