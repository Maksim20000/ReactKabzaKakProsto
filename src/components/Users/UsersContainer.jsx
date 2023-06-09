import {connect} from "react-redux";
import {
    followThunk, getUsersThunkCreater, onPageChangedThunkCreater,
    unfollowThunk
} from "../../redux/reducers/Users-redusor";
import React from "react";
import {Users} from "./Users";
import {Preoloder} from "../comman/preloader/Preoloder";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelect
} from "../../redux/reselectors/users-selector";


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgressBtn: state.usersPage.followingInProgressBtn
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersSelect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgressBtn: getFollowingInProgress(state)
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.pageChange(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?  <Preoloder />: null}

                <Users {...this.props} onPageChanged={this.onPageChanged}/>
            </>

        )
    }
}

let dispatches = {
    getUsers: getUsersThunkCreater,
    pageChange: onPageChangedThunkCreater,
    unfollow: unfollowThunk,
    follow:followThunk
}

export default compose(
    connect(mapStateToProps, dispatches),
)(UsersContainer)
