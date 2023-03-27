import React from "react";
import s from './Dialogs.module.css'

function Dialogs(props){
    debugger
    let refReact = React.createRef()

    let onClickButtonDialogs = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = () => {
        let body = refReact.current.value
        props.onNewMessageChange(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                { props.dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{props.MessagesElements}</div>
                <div>
                    <div><textarea
                        onChange={ onNewMessageChange }
                        value={ props.state.newMessageBody }
                        ref = { refReact}
                        placeholder='Нажмин на меня!'></textarea></div>
                    <div><button onClick={ onClickButtonDialogs }>Кнопка</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs