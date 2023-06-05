import {AuthMe, HeaderApi} from "../../API/api";

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
                isAuth: action.isAuth
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

// авторизуем меня
export const authMeThunk = () => {
    return(dispatch) => {
        HeaderApi.authMeAxious().then(responce => {
            if(responce.data.resultCode === 0){
                let {login, id, email} = responce.data.data
                dispatch(setAuthUserDataCreater(id, email, login))
            }else{
                alert('Не приходят данные вашего аккаунта')
            }
        })
    }
}

// ставлю фото
export const setUsersThunk = (userId) => {
  return(dispatch) => {
      HeaderApi.setPhotoAxious(userId).then(
          response => {
              dispatch(setPhotoAuthCreator(response.data.photos.small))
          }
      )
  }
}

export const setAuthUserDataCreater = (userId, email, login, isAuth = true) => {
    return{
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        },
        isAuth
    }
}

export const setPhotoAuthCreator = (photo) => {
    return{
        type: SET_PHOTO_AUTH,
        photo
    }
}

export const LoginThunk = (email, password, rememberMe) => (dispatch) => {
    AuthMe.Login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0){
            dispatch(authMeThunk(setAuthUserDataCreater))
        }
    })
}

export const LoginOutThunk = () => (dispatch) => {
    AuthMe.logOut().then(response => {
        if(response.data.resultCode === 0){
            dispatch(setAuthUserDataCreater(null, null, null, false))
        }
    })
}

export default AuthReducer