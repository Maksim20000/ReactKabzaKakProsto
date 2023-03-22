import React from "react";
import ReactDOM from 'react-dom'
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let Render = (state) => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch = {store.dispatch.bind(store)}
                 store = {store}
            />
        </BrowserRouter>, document.getElementById('root')
    )
}

Render(store.getState())

store.subscribe(() => {
    let state = store.getState()
    Render(state)
})


