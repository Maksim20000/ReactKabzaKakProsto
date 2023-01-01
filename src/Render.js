import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import {addPost} from "./redux/state";


export let rerenderEntireTree = (state) => {
    const root = ReactDOMClient.createRoot(
        document.getElementById('root')
    )
    root.render(<App state={state} addPost={addPost} newPostText={state.profilePage.newPostText} />)
}


