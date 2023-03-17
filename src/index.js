import React from "react";
import ReactDOM from 'react-dom'
import store from './redux/state'
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let Render = (state) => {

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

store.subscribe(Render)


