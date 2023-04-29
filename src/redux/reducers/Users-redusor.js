const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SETUSER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let inishialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
const UsersRedusor = (state = inishialState, action) => {
    switch (action.type) {
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

export const followAC = (userID) => {
    return{
        type: FOLLOW,
        userID: userID
    }
}

export const unfollowAC = (userID) => {
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