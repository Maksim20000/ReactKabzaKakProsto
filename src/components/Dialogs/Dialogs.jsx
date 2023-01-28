import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
function Dialogs(props){
    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let MessagesElements = props.state.messages.map( m => <Message message= {m.message} /> )


    let dialogRef = React.createRef();
    let addMessage = () => {
        let textRef = dialogRef.current.value
        alert(textRef)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { MessagesElements }
                <textarea ref={ dialogRef }></textarea>
                <button onClick={ addMessage }>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs