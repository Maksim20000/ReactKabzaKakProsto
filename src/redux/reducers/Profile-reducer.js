import {ProfileApi} from "../../API/api";
const ADD_POST = 'ADD-POST'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const setUserProfile = 'setUserProfileAC'
const SetStuatus = 'SET_STUTUS'

let initialState = {
    posts: [
        {
            name: 'Misha',
            likesCount: 4644464,
            id: 1,
            message: 'Hi',
            img: 'https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13'
        },
        {
            name: 'Anton',
            likesCount: 74867345,
            id: 2,
            message: 'Push',
            img: 'https://avatars.mds.yandex.net/i?id=1b0cf1b2dd208130a768284293e6d2e3-5390142-images-thumbs&n=13'
        },
        {
            name: 'Sasha',
            likesCount: 49512,
            id: 3,
            message: 'Commit',
            img: 'https://w7.pngwing.com/pngs/268/471/png-transparent-logo-brand-design-emblem-trademark-logo.png'
        },
        {
            name: 'Oleg',
            likesCount: 0,
            id: 4,
            message: 'lalalalala',
            img: 'https://avatars.mds.yandex.net/i?id=726d5d11739bfc0b7f37a25011227c141e9f583f-5177029-images-thumbs&n=13'
        },
        {
            name: 'Julia',
            likesCount: 955,
            id: 5,
            message: 'GitHub top',
            img: 'https://e1.pngegg.com/pngimages/158/696/png-clipart-avengers-6-hq-yenilmezler-6-hq-marvel-studios-the-avengers-logo.png'
        },
        {
            name: 'Dimchk',
            likesCount: 988563635,
            id: 6,
            message: 'Web storm toppp',
            img: 'https://i.pinimg.com/originals/bc/2e/64/bc2e64ba090bf73db4afe763ca3b9a54.jpg'
        },
    ],
    newPostText: 'Привет',
    isFetching: false,
    profile: null,
    status: ''
}
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetStuatus:
            return {
                ...state,
                status: action.status
            }
        case setUserProfile:
            return {
                ...state, profile: action.profile
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFeching
            }
        case ADD_POST:
            let newPost = {
                id: 11,
                message: action.body,
                likesCount: 5545454,
                name: 'Андрей',
                img: 'https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13'
            }
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }

        default:
            return {...state}

    }
}

export const setStatusAC = (status) => {
  return{
      type:SetStuatus,
      status
  }
}

export const GetStatusThunk = (userId) => (dispatch) =>{
        ProfileApi.getStatus(userId).then(response => {
            if(response.status === 200){
                dispatch(setStatusAC(response.data))
            }else{
                alert('не приходит статус')
            }
        })
}
export const updateStatusThunk = (status) => (dispatch) => {
    ProfileApi.updateStatus(status).then(response => {
        dispatch(setStatusAC(status))
    })
}

export const setUsersThunk = (userId) => {
  return(dispatch) => {
      ProfileApi.getUsersPofile(userId).then(response => {
          dispatch(setUserProfileAC(response.data))
      })
  }
}

export const setUserProfileAC = (profile) => {
    return{
        type: setUserProfile,
        profile: profile
    }
}

export const toggleIsFetchingACToProfile = (isFeching) => {
    return{
        type: TOGGLE_IS_FETCHING,
        isFeching: isFeching
    }
}

export const addNewPostProfileCreater = (body) => {
    return {
        type: ADD_POST,
        body
    }
}


export default ProfileReducer
