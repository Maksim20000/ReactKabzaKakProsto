import {authMeThunk} from "./auth-reduser";

const INITIALIZED_SUCCESS = 'SET_INISIALIZET'

let initialState = {
    initialized: false
}
const appRedusor = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

export const intializedSuccessCreater = () => {
    return{
        type: INITIALIZED_SUCCESS
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMeThunk())

    Promise.all([promise]).then(() => {
        dispatch(intializedSuccessCreater())
    })
}


export default appRedusor