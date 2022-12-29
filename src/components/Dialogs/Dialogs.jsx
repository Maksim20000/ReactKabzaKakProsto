import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
function Dialogs(){
    let dialogs = [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Julia'},
        {id: 6, name: 'Dimchk'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Push'},
        {id: 3, message: 'Commit'},
        {id: 4, message: 'lalalalala'},
        {id: 5, message: 'GitHub top'},
        {id: 6, message: 'Web storm toppp'},
    ];

    let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let MessagesElements = messages.map( m => <Message message= {m.message} /> )

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