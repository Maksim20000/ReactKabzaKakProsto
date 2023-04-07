
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {
            name: 'Misha',
            likesCount: 4644464,
            id: 1,
            message: 'Hi',
            img: 'https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13'
        },
        {
            name: 'Anton',
            likesCount: 74867345,
            id: 2,
            message: 'Push',
            img: 'https://avatars.mds.yandex.net/i?id=1b0cf1b2dd208130a768284293e6d2e3-5390142-images-thumbs&n=13'
        },
        {
            name: 'Sasha',
            likesCount: 49512,
            id: 3,
            message: 'Commit',
            img: 'https://w7.pngwing.com/pngs/268/471/png-transparent-logo-brand-design-emblem-trademark-logo.png'
        },
        {
            name: 'Oleg',
            likesCount: 0,
            id: 4,
            message: 'lalalalala',
            img: 'https://avatars.mds.yandex.net/i?id=726d5d11739bfc0b7f37a25011227c141e9f583f-5177029-images-thumbs&n=13'
        },
        {
            name: 'Julia',
            likesCount: 955,
            id: 5,
            message: 'GitHub top',
            img: 'https://e1.pngegg.com/pngimages/158/696/png-clipart-avengers-6-hq-yenilmezler-6-hq-marvel-studios-the-avengers-logo.png'
        },
        {
            name: 'Dimchk',
            likesCount: 988563635,
            id: 6,
            message: 'Web storm toppp',
            img: 'https://i.pinimg.com/originals/bc/2e/64/bc2e64ba090bf73db4afe763ca3b9a54.jpg'
        },
    ],
    newPostText: 'Привет'
}
const ProfileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 5545454,
                name: 'Андрей',
                img: 'https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13'
            };
            let stateCopy = {...state}
            stateCopy.post = [...state.postData]
            stateCopy.post.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT:{
            let stateCopy ={...state}
            stateCopy.newPostText = action.text
            
            ошибка не то возвращаю
            return state
        }

        default:{
            let stateCopy ={...state}
            return stateCopy
        }
    }
}

export const addNewPostProfileCreater = () => {
    return {
        type: ADD_POST,
        text: 'плплп'
    }
}

export const updateNewPostTextActionCreater = (textArea) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: textArea
    }
}

// export let updateNewMessageBodyCreater = (body) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY,
//         body: body
//     }
// }

export default ProfileReducer
