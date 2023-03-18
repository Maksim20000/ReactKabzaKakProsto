const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ProfileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 5545454,
                name: 'Андрей',
                img: 'https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13'
            };
            state.postData.push(newPost)
            state.newPostText = ''
            return state


        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state

        default:
            return state
    }


}

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreater = (textArea) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: textArea
    }
}

export default ProfileReducer
