import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/reducers/Dialogs-redusor";

function Dialogs(props){
    let state = props.state.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let MessagesElements = state.messages.map( m => <Message message= {m.message} /> )

    let refReact = React.createRef()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater())
    }

    let onNewMessageChange = ( event ) => {
        let body = refReact.current.value
        props.store.dispatch(updateNewMessageBodyCreater(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{MessagesElements}</div>
                <div>
                    <div><textarea
                        onChange={ onNewMessageChange }
                        value={ state.newMessageBody }
                        ref = { refReact}
                        placeholder='Нажмин на меня!'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Кнопка</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs