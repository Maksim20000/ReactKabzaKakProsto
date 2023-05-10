import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'f4369178-3f77-4cca-a2e8-83509a9dd95e'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersApi = {
    getUsers: (currentPage = 1, pageSize = 1) => {
        return(
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    unFollow: (id) => {
        return(
            instance.delete(`follow/${id}`).then(responce => responce.data)
        )
    },
    Follow: (id) => {
        return(
            instance.post(`follow/${id}`).then(responce => responce.data)
        )
    }
}

export const ProfileApi = {
    getUsers: (userId) => {
        return(
            instance.get(`profile/`+ userId).then(responce => responce.data)
        )
    }
}