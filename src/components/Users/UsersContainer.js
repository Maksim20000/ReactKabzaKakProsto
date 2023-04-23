import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/Users-redusor";
import {Users} from "./Users";

let mapStateToProps = (state) => {
    debugger
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
        setUsers: (users) => {
            let action = setUsersAC(users)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)