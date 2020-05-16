import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sidebar-reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Vika'},
                {id: 3, name: 'Masha'},
                {id: 4, name: 'Ksu'}
            ],
            message: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'ok'},
                {id: 3, message: 'huyok'},
                {id: 4, message: 'haha'}
            ],
            newMessageText: ""
        },
        profilePage: {
            post: [
                {
                    id: 1,
                    like: 5,
                    message: '🎵 Приглашаю тебя на Бесплатный онлайн-Марафон "Основы звукорежиссуры".\n' +
                        '\n' +
                        '🖐🏻 Привет, меня зовут Юра Фауст. 🎹 Я - обучаю сведению, мастерингу и' +
                        ' в целом работе с музыкальной композицией. 🚀 ' +
                        'С моей командой мы организовали недельный онлайн-марафон,' +
                        ' на котором даже самый новичок научиться основам звукорежиссуры . ' +
                        'Могу смело сказать, что это крутейший марафон,' +
                        ' на котором вы могли быть. ' +
                        '🔥 Места ограничены, так как желающих очень ' +
                        'много. Поэтому не упусти свой шанс!'
                },
                {id: 2, like: 6, message: 'hi, idioto'}
            ],
            newPostText: ' '

        },
        siteBerItem: {
            siteBar: [
                {name: 'Sasha', img: 'https://i.pinimg.com/736x/9f/30/df/9f30dfe75f0fd663eb3e13b8e047a953.jpg'},
                {name: 'Vika', img: 'https://img.joinfo.ua/i/2018/07/5b50c20e07784.jpg'},
                {
                    name: 'Masha',
                    img: 'https://images11.cosmopolitan.ru/upload/img_cache/08d/08d63cc11cc16e95ee81c2bc2ba65efa_ce_1006x741x0x0_fitted_740x0.jpg'
                },
                {name: 'Yo', img: 'https://primamedia.gcdn.co/f/main/1355/1354411.jpg?6b9998c1383d1be1d57f740bc1408414'}
            ]
        }

    },
    getState() {
        return this._state;
    },
    _callSubscribe() {

    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

        this._callSubscribe(this._state);
    }


}

export default store;

















