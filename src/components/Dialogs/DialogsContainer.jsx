import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/reducers/Dialogs-redusor";


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