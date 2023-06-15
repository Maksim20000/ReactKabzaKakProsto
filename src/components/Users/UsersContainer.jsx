import {connect} from "react-redux";
import {
    followThunk,
    getUsersThunkCreater,
    onPageChangedThunkCreater,
    unfollowThunk
} from "../../redux/reducers/Users-redusor";
import React, {useEffect} from "react";
import {Users} from "./Users";
import {Preoloder} from "../comman/preloader/Preoloder";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsersReselectot,
    totalPageCount,
} from "../../redux/reselectors/users-selector";


let mapStateToProps = (state) => {
    return {
        users: getUsersReselectot(state),
        totalPageCount: totalPageCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgressBtn: getFollowingInProgress(state)
    }
}

function UsersContainer(props) {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [props])

    const onPageChanged = (pageNumber) => {
        props.pageChange(pageNumber, props.pageSize)
    }
    return (
        <>
            {props.isFetching ? <Preoloder/> : null}

            <Users {...props} onPageChanged={onPageChanged}/>
        </>

    )
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
