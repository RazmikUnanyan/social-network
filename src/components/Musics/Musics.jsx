import React from "react";
import Preloader from "../common/ Preloader/Preloader";
import s from "./Musics.module.css";

const Musics = () => {
    return (
        <div className={s.music}>
            <dev >
                <Preloader />
            </dev>
            <dev>
                is being developed...
            </dev>
        </div>
    )
};

export default Musics;