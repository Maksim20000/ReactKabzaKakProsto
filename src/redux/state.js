const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SENT_MESSAGE = 'SENT_MESSAGE'


let store = {
    _state: {
        dialogsPage: {
                dialogs: [
                {id: 1, name: 'Misha', message: 'Hi'},
                {id: 2, name: 'Anton', message: 'Push'},
                {id: 3, name: 'Sasha', message: 'Commit'},
                {id: 4, name: 'Oleg', message: 'lalalalala'},
                {id: 5, name: 'Julia', message: 'GitHub top'},
                {id: 6, name: 'Dimchk', message: 'Web storm toppp'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Push'},
                {id: 3, message: 'Commit'},
                {id: 4, message: 'lalalalala'},
                {id: 5, message: 'GitHub top'},
                {id: 6, message: 'Web storm toppp'},
            ],
            newMessageBody: 'Привет228'
        },

        profilePage: {
            postData: [
                {name: 'Misha',likesCount: 4644464, id: 1, message: 'Hi', img: 'https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13'},
                {name: 'Anton', likesCount:74867345, id: 2, message: 'Push', img: 'https://avatars.mds.yandex.net/i?id=1b0cf1b2dd208130a768284293e6d2e3-5390142-images-thumbs&n=13'},
                {name: 'Sasha', likesCount:49512, id: 3, message: 'Commit', img: 'https://w7.pngwing.com/pngs/268/471/png-transparent-logo-brand-design-emblem-trademark-logo.png'},
                {name: 'Oleg',likesCount: 0, id: 4, message: 'lalalalala', img: 'https://avatars.mds.yandex.net/i?id=726d5d11739bfc0b7f37a25011227c141e9f583f-5177029-images-thumbs&n=13'},
                {name: 'Julia',likesCount:955, id: 5, message: 'GitHub top', img: 'https://e1.pngegg.com/pngimages/158/696/png-clipart-avengers-6-hq-yenilmezler-6-hq-marvel-studios-the-avengers-logo.png'},
                {name: 'Dimchk',likesCount:988563635, id: 6, message: 'Web storm toppp', img: 'https://i.pinimg.com/originals/bc/2e/64/bc2e64ba090bf73db4afe763ca3b9a54.jpg'},
            ],
            newPostText: 'Привет'
        }
    },
    getState(){
        return this._state
    },
    _callSubscribe(){
            console.log('Привет')
    },

    dispatch(action){
        debugger
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 5545454,
                name: 'Андрей',
                img: 'https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13'
            };
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscribe(this._state)
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscribe(this._state)
        }

        // работает
        else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscribe(this._state)

        }else if(action.type === SENT_MESSAGE){
            debugger
            let pushElement = {
                id: 7,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(pushElement)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscribe(this._state)
        }

    },
    subscribe(observer){
        this._callSubscribe = observer
    }
}



export let sendMessageCreater = () => {
    return {
        type: SENT_MESSAGE,
        text: 'лалала'
    }
}

export let updateNewMessageBodyCreater = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
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


window.store = store
export default store