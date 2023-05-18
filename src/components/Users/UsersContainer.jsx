import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC, toggleIsFolloingBtn,
    unfollowAC
} from "../../redux/reducers/Users-redusor";
import React from "react";
import {Users} from "./Users";
import {Preoloder} from "../comman/preloader/Preoloder";
import {UsersApi} from "../../API/api";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgressBtn: state.usersPage.followingInProgressBtn
    }
}

class UsersContainer extends React.Component {
    // По умолчанию
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        UsersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })

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
    follow: followAC,
    unfollow:unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalCount: setTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleIsFolloingBtn
}
export default connect(mapStateToProps, dispatches)(UsersContainer)