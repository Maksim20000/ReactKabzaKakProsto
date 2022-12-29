import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {MessageDialog} from "./MessageDialog/MessageDialog";
function Dialogs(){
    let dialogsData = [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Julia'},
        {id: 6, name: 'Dimchk'},
    ];

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Push'},
        {id: 3, message: 'Commit'},
        {id: 4, message: 'lalalalala'},
        {id: 5, message: 'GitHub top'},
        {id: 6, message: 'Web storm toppp'},
    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <MessageDialog message={messageData[0].message } />
                <MessageDialog message={messageData[1].message }/>
                <MessageDialog message={messageData[2].message }/>
                <MessageDialog message={messageData[3].message }/>
                <MessageDialog message={messageData[4].message }/>
                <MessageDialog message={messageData[5].message }/>
            </div>
        </div>
    )
}

export default Dialogs