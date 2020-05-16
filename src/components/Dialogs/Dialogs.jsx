import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = ({messagesPage, sendMessage, newMessageAction}) => {

    let dialogElement = messagesPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElement = messagesPage.message.map(m => <Message message={m.message}/>)
    let newMessageBody = messagesPage.newMessageText;

    let addMessage = () => {
       sendMessage();
    };

    let onChangeText = (e) => {
        let text = e.target.value;
        newMessageAction(text);

    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <textarea
                        onChange={onChangeText}
                        className={s.textarea}
                        rows="2" cols="60"
                        value={newMessageBody}
                        placeholder="Enter you'r message">
                    </textarea>
                </div>
                <div>
                    <button
                        onClick={addMessage}>Add Message
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;