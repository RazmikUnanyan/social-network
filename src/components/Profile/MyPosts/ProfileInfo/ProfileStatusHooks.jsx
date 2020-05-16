import React, {useEffect, useState} from 'react';
import styles from "./ProfileInfo.module.css";


const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode= () => {
        setEditMode(true);
    };

    const diactivateEditMode= () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange =(e) => {
        setStatus(e.currentTarget.value)
    };


    return (
        <div className={styles.status}>
            {!editMode &&
            <div className={styles.statusSpan}>
                <span  onDoubleClick={activateEditMode}>{props.status || 'set a status message'}</span>
                <hr/>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                    onBlur={diactivateEditMode}
                       autoFocus={true}
                       value={status}
                      /><hr/>
            </div>
            }
        </div>)
};


export default ProfileStatusHooks;