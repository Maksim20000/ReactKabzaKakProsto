const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PHOTO_AUTH = 'SET_PHOTO_AUTH'

let initialState = {
    userId: null,
    isFeching: false,
    email: null,
    login: null,
    isAuth: false,
    photo: null
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_PHOTO_AUTH:
            return {
                ...state,
                photo: action.photo
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFeching
            }

        default:
            return {...state}

    }
}

export const setAuthUserData = (userId, email, login) => {
    return{
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}

export const setPhotoAuth = (photo) => {
    return{
        type: SET_PHOTO_AUTH,
        photo
    }
}

export default AuthReducer