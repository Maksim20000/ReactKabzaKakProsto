// import React from "react";
// import {Message} from "./MessageDialog/Message";
// import {DialogItem} from "./DialogItem/DialogItem";
// import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/reducers/Dialogs-redusor";
// import Dialogs from "./Dialogs";
// import {connect} from "react-redux";

// function DialogsContainer(props){
//     return (
//         <Provider.Consumer>
//             {store => {
//                 let state = store.getState().dialogsPage
//
//                 let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> )
//                 let MessagesElements = state.messages.map( m => <Message message= {m.message} /> )
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreater())
//                 }
//
//                 let onNewMessageChange = ( text ) => {
//                     let body = text
//                     store.dispatch(updateNewMessageBodyCreater(body))
//                 }
//                 return(
//                     <Dialogs
//                              onSendMessageClick={onSendMessageClick}
//                              onNewMessageChange={onNewMessageChange}
//                              state={state}
//                     />
//                 )
//             }
//         }
//
//         </Provider.Consumer>
//
//     )
// }



import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/reducers/Dialogs-redusor";

debugger
let MapToStateProps = (state) => {
    return {
        state: state
    }

}

let MapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            let action = sendMessageCreater()
            dispatch(action)
        },
        onNewMessageChange: (body) => {
            let action = updateNewMessageBodyCreater(body)
            dispatch(action)
        }
    }
}



const DialogsContainer = connect(MapToStateProps, MapDispatchToProps)(Dialogs)


export default DialogsContainer