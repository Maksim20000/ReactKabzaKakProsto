import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/reducers/Dialogs-redusor";


let MapToStateProps = (state) => {
    return {
        state: state
    }

}


let dispatch = {
    onSendMessageClick:sendMessageCreater,
    onNewMessageChange:updateNewMessageBodyCreater
}

const DialogsContainer = connect(MapToStateProps, dispatch)(Dialogs)


export default DialogsContainer