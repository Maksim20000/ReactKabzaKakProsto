import {UsersApi} from "../../API/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SETUSER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const Following_is_Fetching_Progress = 'Following_is_Fetching'

let inishialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: false,
    followingInProgressBtn: []
}
const UsersRedusor = (state = inishialState, action) => {
    switch (action.type) {
        case Following_is_Fetching_Progress:
            return{
                ...state,
                followingInProgressBtn: action.isFetching
                    ? [...state.followingInProgressBtn, action.userId]
                    : state.followingInProgressBtn.filter(id => id !== action.userId)
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFeching
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                // Затестить действительно ли они идентичны
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USER:
            return{
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        default:
            return state

    }
}

export const onPageChangedThunkCreater = (pageNumber, pageSize) => {
  return(dispatch) => {
      dispatch(toggleIsFetchingAC(true))
      dispatch(setCurrentPageAC(pageNumber))
      UsersApi.getUsers(pageNumber, pageSize).then(data => {
          dispatch(setUsersAC(data.items))
          dispatch(toggleIsFetchingAC(false))
      })
  }
}

export const getUsersThunkCreater = (currentPage, pageSize) => {
    return(dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        UsersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))
            dispatch(toggleIsFetchingAC(false))
        })
    }
}

export const toggleIsFolloingBtn = (isFetching, userId) => {
    return {
        type: Following_is_Fetching_Progress,
        isFetching, userId
    }
}

export const toggleIsFetchingAC = (isFeching) => {
    return{
        type: TOGGLE_IS_FETCHING,
        isFeching: isFeching
    }
}

export const setTotalCountAC = (totalUsersCount) => {
    return{
        type: SET_TOTAL_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const setCurrentPageAC = (currentPage) =>{
    return{
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const unfollowThunk = (id) => {
    return(dispatch) => {
        dispatch(toggleIsFolloingBtn(true, id))
        UsersApi.unFollow(id).then(data => {
            if(data.resultCode === 0){
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleIsFolloingBtn(false, id))
        })
    }
}

export const followThunk = (id) => {
    return(dispatch) => {
        toggleIsFolloingBtn(true, id)
        UsersApi.Follow(id).then(data => {
            if(data.resultCode === 0){
                dispatch(followACSuccess(id))
            }
            dispatch(toggleIsFolloingBtn(false, id))
        })
    }
}

export const followACSuccess = (userID) => {
    return{
        type: FOLLOW,
        userID: userID
    }
}

export const unfollowSuccess = (userID) => {
    return{
        type: UNFOLLOW,
        userID: userID
    }
}

export const setUsersAC = (users) => {
    return{
        type: SET_USER,
        users: users
    }
}

export default UsersRedusor