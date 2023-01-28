import state from './redux/state';
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App'

let rerenderEntireTree = (state) => {
    const root = ReactDOMClient.createRoot(document.getElementById('root'))
    root.render(<App state={state}
                     newPostText={state.profilePage.newPostText}
    />)
}

rerenderEntireTree(state)

