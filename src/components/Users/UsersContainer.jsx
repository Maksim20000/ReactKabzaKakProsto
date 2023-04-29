import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "../../redux/reducers/Users-redusor";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preoloder} from "../comman/preloader/Preoloder";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageAC(currentPage)
            dispatch(action)
        },
        setTotalCount: (totalUsersCount) => {
            let action = setTotalCountAC(totalUsersCount)
            dispatch(action)
        },
        toggleIsFetching: (isFeching) => {
            let action = toggleIsFetchingAC(isFeching)
            dispatch(action)
        }
    }
}

class UsersAPI extends React.Component {
    // По умолчанию
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        {this.props.toggleIsFetching(true)}
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            debugger
            this.props.setUsers(responce.data.items)
            this.props.setTotalCount(responce.data.totalCount)
            {this.props.toggleIsFetching(false)}
        })
    }

    onPageChanged = (pageNumber) => {
        {this.props.toggleIsFetching(true)}
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            {this.props.toggleIsFetching(false)}
        })

    }

    render() {
        return (
            <>
                {this.props.isFetching ?  <Preoloder />: null}

                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)