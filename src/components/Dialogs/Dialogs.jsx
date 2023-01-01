import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
function Dialogs(props){
    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let MessagesElements = props.state.messages.map( m => <Message message= {m.message} /> )


    let textAreaReact = React.createRef();
    let messagesAdd = () => {
        debugger

        let text = textAreaReact.current.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { MessagesElements }
                <textarea ref={ textAreaReact }></textarea>
                <button onClick={ messagesAdd }>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs