import React from "react";
import {Message} from "./MessageDialog/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/reducers/Dialogs-redusor";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

function DialogsContainer(props){
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage

                let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> )
                let MessagesElements = state.messages.map( m => <Message message= {m.message} /> )

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreater())
                }

                let onNewMessageChange = ( text ) => {
                    let body = text
                    store.dispatch(updateNewMessageBodyCreater(body))
                }
                return(
                    <Dialogs dialogsElements={dialogsElements}
                             MessagesElements={MessagesElements}
                             onSendMessageClick={onSendMessageClick}
                             onNewMessageChange={onNewMessageChange}
                             state={state}
                    />
                )
            }
        }

        </StoreContext.Consumer>

    )
}

export default DialogsContainer