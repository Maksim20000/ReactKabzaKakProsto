import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {New} from "./components/New/New";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {Login} from "./components/Login/Login";
import Navbar_header from "./components/NavBar/Navbar_header";


function App(props) {

    return(
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <Navbar_header />
                <div className='app-wrapper-content' >
                    <Routes>
                        <Route path="/profile" element = { <Profile postData={props.postData}/> }/>
                        <Route path="/dialogs" element = { <Dialogs  dialogs={props.dialogs} messages={props.messages}/> }/>
                        <Route path="/new" element = {<New />}/>
                        <Route path="/music" element = {<Music />} />
                        <Route path="/setting" element = {<Setting />}/>
                        <Route path='/login' element={<Login/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App