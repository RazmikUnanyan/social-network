import React from "react";
import {addMessageActionCreator, newMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());

        },
        newMessageAction: (text) => {
            dispatch(newMessageActionCreator(text));

        }
    }
};

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

