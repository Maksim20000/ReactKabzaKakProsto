import {connect} from "react-redux";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/reducers/Dialogs-redusor";
import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageDialog/Message";
import {withAuthRedirect} from "../../hoc/isAuthRedirect";


function Dialogs(props){
    let refReact = React.createRef()

    let state = props.state.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} key={d.id} name={d.name} /> )
    let MessagesElements = state.messages.map( m => <Message message= {m.message} key={m.id}/> )

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
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{MessagesElements}</div>
                <div>
                    <div className='d-flex'><textarea
                        className="form-control"
                        onChange={ onNewMessageChange }
                        value={ state.newMessageBody }
                        ref = { refReact}
                        placeholder='Нажмин на меня!'></textarea></div>
                    <div><button onClick={ onClickButtonDialogs } className='btn btn-success'>Кнопка</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

let MapToStateProps = (state) => {
    return {
        state: state,
        isAuth: state.auth.isAuth
    }

}


let dispatch = {
    onSendMessageClick:sendMessageCreater,
    onNewMessageChange:updateNewMessageBodyCreater
}



let authRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(MapToStateProps, dispatch)(authRedirectComponent)


export default DialogsContainer