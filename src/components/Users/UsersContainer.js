import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/Users-redusor";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {
            let action = followAC(usersID)
            dispatch(action)
        },
        unfollow: (usersID) => {
            let action = unfollowAC(usersID)
            dispatch(action)
        },
        setUsers: (user) => {
            let action = setUsersAC(user)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)