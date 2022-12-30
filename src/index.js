import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App'

let dialogs = [
    {id: 1, name: 'Misha'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Oleg'},
    {id: 5, name: 'Julia'},
    {id: 6, name: 'Dimchk'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Push'},
    {id: 3, message: 'Commit'},
    {id: 4, message: 'lalalalala'},
    {id: 5, message: 'GitHub top'},
    {id: 6, message: 'Web storm toppp'},
];

let postData = [
    {id: 1, message: 'First post', likesCount: 50},
    {id: 2, message: 'Веб шторм топ', likesCount: 546454654},
    {id: 3, message: 'Веб шторм топ', likesCount: 5454},
    {id: 4, message: 'Веб шторм топ', likesCount: 31231},
    {id: 5, message: 'Веб шторм топ', likesCount: 6798763},
    {id: 6, message: 'Веб шторм топ', likesCount: 0}
];

const root = ReactDOMClient.createRoot(
    document.getElementById('root')
)

root.render(<App dialogs={dialogs}  messages={messages} postData={postData}/>)

