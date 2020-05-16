const ADD_MESSAGE = 'message/ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'messageBody/UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Ksu'}
    ],
    message: [ ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            return {
                ...state,
                newMessageText: '',
                message: [...state.message, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMText,
            };
        default:
            return state;

    }
};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const newMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMText: text});


export default dialogsReducer;