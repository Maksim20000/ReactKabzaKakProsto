import {connect} from "react-redux";
import {sendMessageCreater} from "../../redux/reducers/Dialogs-redusor";
import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageDialog/Message";
import {withAuthRedirect} from "../../hoc/isAuthRedirect";
import {compose} from "redux";
import { reduxForm} from "redux-form";
import {MessageDialogsFormRedux} from "./DialogsForm/DialogsForm";


function Dialogs(props){
    let state = props.state.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} key={d.id} name={d.name} /> )
    let MessagesElements = state.messages.map( m => <Message message= {m.message} key={m.id}/> )

    // const onSubmit = (formData) => {
        // console.log(formData.newMessageBody)
    // }

    const AddNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{MessagesElements}</div>
                <div>
                    <MessageDialogsFormRedux onSubmit={AddNewMessage} state={state}/>
                </div>
            </div>
        </div>
    )
}

const MyMessageForm = reduxForm({
    form: 'DialogAddMessageForm'
})(Dialogs)


let MapToStateProps = (state) => {
    return {
        state: state
    }

}
let dispatch = {
    onSendMessageClick:sendMessageCreater,
}

export default compose(
    connect(MapToStateProps, dispatch),
    withAuthRedirect
)(MyMessageForm)


