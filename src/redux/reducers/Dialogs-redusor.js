const SENT_MESSAGE = 'SENT_MESSAGE'

let inishialState = {
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

const DialogsRedusor = (state = inishialState, action) => {
    switch (action.type) {

        case SENT_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state

    }
}

export let sendMessageCreater = (newMessageBody) => {
    return {
        type: SENT_MESSAGE,
        newMessageBody
    }
}

export default DialogsRedusor