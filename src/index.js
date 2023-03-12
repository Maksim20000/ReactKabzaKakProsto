import React from "react";
import ReactDOM from 'react-dom'
import store from './redux/state'
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let Render = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 // addPost={store.addPost.bind(store)}
                 dispatch = {store.dispatch.bind(store)}
                 // updateNewText = {store.updateNewText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    )
}

Render(store.getState())

store.subscribe(Render)


