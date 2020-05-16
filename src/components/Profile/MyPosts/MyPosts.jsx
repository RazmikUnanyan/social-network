import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = React.memo(props => {

    let postElement = props.post.map(p => <Post message={p.message} like={p.like} key={p.id}/>);

    let newPostElement = props.newPostText;


    const addNewPost = (values) => {
        props.sendPost(values.newMessageBody);
    };

    return (
        <div className={styles.postBlok}>
            <AddMessageReduxForm onSubmit={addNewPost}/>
            <div className={styles.posts}>
                {postElement}
            </div>
        </div>
    )


});

const AddMessageForm = (props) => {
    return <form className={styles.myPosts} onSubmit={props.handleSubmit}>
        <div>
            <Field rows="3" cols="77"
                   name='newMessageBody'
                   component='textarea'
                   placeholder="What's new?"
                   className={styles.textarea}/>
        </div>
        <div>
            <button>
                Post
            </button>
        </div>
    </form>
};

const AddMessageReduxForm = reduxForm({form: 'dialigAddMessageForm'})(AddMessageForm)

export default MyPosts;