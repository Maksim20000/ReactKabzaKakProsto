import React from "react";
import {addPost, updateNewText} from './redux/state'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let Render = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewText = {updateNewText}
            />
        </BrowserRouter>, document.getElementById('root')
    )
}