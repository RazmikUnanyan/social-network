import React from "react";
import Preloader from "../common/ Preloader/Preloader";
import s from "./Settings.module.css"

const Settings = () => {
    return (
        <div className={s.settings}>
            <dev >
                <Preloader />
            </dev>
            <dev>
                is being developed...
            </dev>
        </div>

    )
};
export default Settings;