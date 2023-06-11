import {createSelector} from "reselect";

const getUsersSelector= (state) => {
    return state.usersPage.users
}
export const getUsersReselectot = createSelector(getUsersSelector, (users) => {
    return users.filter(m => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const totalPageCount = createSelector(getPageSize, getTotalUsersCount,
    (pageSize, UsersCount) => {
        let pagesCount = Math.ceil(UsersCount / pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i ++){
            pages.push(i)
        }

        return pages
    })





export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgressBtn
}