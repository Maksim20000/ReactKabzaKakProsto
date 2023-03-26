import React from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store'

let Render = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
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


