import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {CreaterDialogsChangeText, CreaterDialogsClick} from "../../redux/state";

function Dialogs(props){
    debugger
    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let MessagesElements = props.state.messages.map( m => <Message message= {m.message} /> )

    let refReactDialogs = React.createRef()

    let ChangeStateInDialog = () => {
        let text = refReactDialogs.current.value
        props.dispatch(CreaterDialogsChangeText(text))
    }

    let onClickDialogsTextBtn = () => {
        props.dispatch(CreaterDialogsClick())
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { MessagesElements }
                <textarea ref={ refReactDialogs } onChange={ ChangeStateInDialog } value={ props.state.textMessegeDialog }/>
                <button onClick={onClickDialogsTextBtn}>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs