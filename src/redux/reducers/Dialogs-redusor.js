const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SENT_MESSAGE = 'SENT_MESSAGE'

const DialogsRedusor = (state, action) => {

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