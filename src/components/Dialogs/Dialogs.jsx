import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
function Dialogs(props){
    let dialogsElements = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let MessagesElements = props.messages.map( m => <Message message= {m.message} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { MessagesElements }
            </div>
        </div>
    )
}

export default Dialogs