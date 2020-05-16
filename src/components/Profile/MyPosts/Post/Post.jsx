import React from 'react';
import styles from './Post.module.css';
import ava from "../../../../assets/image/ava.png"

const Post = ({message}) => {
    return (

        <div className={styles.item}>
            <img src={ava}/>

            <div className={styles.postMessage}>
                {message}
            </div>
        </div>
    )
};

export default Post;