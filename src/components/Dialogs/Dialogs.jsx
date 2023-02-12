import React from "react";
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
function Dialogs(props){
    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let MessagesElements = props.state.messages.map( m => <Message message= {m.message} /> )


    let refTextArea = React.createRef();

    let onClickButtonDialogs = () => {
        let text = refTextArea.current.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { MessagesElements }
                <textarea ref={ refTextArea } value='it'/>
                <button onClick={ onClickButtonDialogs }>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs