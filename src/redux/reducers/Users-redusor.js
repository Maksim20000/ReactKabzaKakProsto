const FOLLOW = 'FOLLOW'
const  UNFOLLOW = 'UNFOLLOW'
const SETUSER = 'SETUSER'

let inishialState = {
    users: [
        // {id: 1,followed: true, fullName: 'Misha', status: 'boss', location: {city: 'Minsk', country: 'Russia'}},
        // {id: 2,followed: false, fullName: 'Anton', status: 'teacher', location: {city: 'Vladivostok', country: 'Russia'}},
        // {id: 3,followed: true, fullName: 'Sasha', status: 'puiple', location: {city: 'New York', country: 'USA'}},
        // {id: 4,followed: false, fullName: 'Oleg', status: 'teacher', location: {city: 'Nigeria', country: 'Afrika'}},
        // {id: 5,followed: true, fullName: 'Julia', status: 'Head Master', location: {city: 'Britania', country: 'UK'}},
        // {id: 6,followed: false, fullName: 'Dimchk', status: 'teacher', location: {city: 'Franch', country: 'Russia'}}
    ]
}

const UsersRedusor = (state = inishialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
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

        case SETUSER:
            return

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

export const setUsersAC = (user) => {
    return{
        type: SETUSER,
        user: user
    }
}

export default UsersRedusor