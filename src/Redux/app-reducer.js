
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED= 'SET_INITIALIZED';



let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
};

export const initializetSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () =>(Dispatch)=>{
    let promise = Dispatch(getAuthUserData());

    Promise.all([promise])
        .then(()=>{
        Dispatch(initializetSuccess());
    })




};




export default appReducer;