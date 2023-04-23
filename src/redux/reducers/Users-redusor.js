const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SETUSER'

let inishialState = {
    users: [

    ]
}
const UsersRedusor = (state = inishialState, action) => {

    switch (action.type) {
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
                users: [...state.users, ...action.user]
            }

        default:
            return state

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
        user: users
    }
}

export default UsersRedusor