import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import state from './redux/state';

const root = ReactDOMClient.createRoot(
    document.getElementById('root')
)

root.render(<App state={state}/>)

