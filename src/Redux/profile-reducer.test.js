import profileReducer, {addPostActionCreator} from "./profile-reducer";


it('lenght of post should be incremented', ()=> {
let action = addPostActionCreator('всем привет');
    let state = {
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
            }
        ]
    };
let newState = profileReducer(state, action);

expect(newState.post.length).toBe(2)
 });