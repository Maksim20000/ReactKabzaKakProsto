import React from "react";
import {addPost, dialogsChangeText, onClickDialogsText, subscribe, updateNewText} from './redux/state'
import ReactDOM from 'react-dom'
import state from './redux/state'
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let Render = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewText = {updateNewText}
                 dialogsChangeText={dialogsChangeText}
                 onClickDialogsText = {onClickDialogsText}

            />
        </BrowserRouter>, document.getElementById('root')
    )
}

Render(state)

subscribe(Render)


