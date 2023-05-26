import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'dab2cd6e-a930-4ed9-a713-3359dba39df3'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const HeaderApi = {
    setPhotoAxious: (userId) => {
        return(
            instance.get(`profile/${userId}`).then(response => response)
        )
    },
    authMeAxious: () => {
        return(
            instance.get(`auth/me`).then(response => response)
        )
    }
}

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
    getUsersPofile: (userId) => {
        return(
            instance.get(`profile/`+ userId).then(responce => responce)
        )
    },
    // https://social-network.samuraijs.com/api/1.0/profile/status/2
    getStatus: (userId) => {
        return(
            instance.get('profile/status/' + userId).then(response => response)
        )
    },
    updateStatus: (status, userId) => {
        return(
            instance.put(`profile/status/`, {status: status})
        )
    }

}
