const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SENT_MESSAGE = 'SENT_MESSAGE'

let inishialState = {
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
    }
}

const DialogsRedusor = (state = inishialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        case SENT_MESSAGE:
            let pushElement = {
                id: 7,
                message: state.newMessageBody
            }
            state.messages.push(pushElement)
            state.newMessageBody = ''
            return state

        default:
            return state

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

export default DialogsRedusor