import React from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <BrowserRouter>
        <App state={store.getState()}
             store={store}
        />
    </BrowserRouter>, document.getElementById('root')
)






