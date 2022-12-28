import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {MessageDialog} from "./MessageDialog/MessageDialog";


function Dialogs(){
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                <Dialog name='Misha' id='1'/>
                <Dialog name='Anton' id='2'/>
                <Dialog name='Sasha' id='3'/>
                <Dialog name='Oleg' id='4'/>
                <Dialog name='Julia' id='5'/>
            </div>
            <div className={s.messages}>
                <MessageDialog message='Hi'/>
                <MessageDialog message='Push'/>
                <MessageDialog message='Commit'/>
                <MessageDialog message='lalalalala'/>
            </div>
        </div>
    )
}

export default Dialogs