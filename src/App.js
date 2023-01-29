import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {Login} from "./components/Login/Login";
import New from "./components/New/New";
import Navbar from "./components/NavBar/Navbar_header";
import {Base} from "./components/Base/Base";
import {Register} from "./components/Register/Register";


function App(props) {
    return(
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content' >
                    <Routes>
                        <Route path='/' element={ <Base /> } />
                        <Route path="/profile" element = { <Profile state={props.state.profilePage}
                                                                    newPostText={props.newPostText}
                                                                    addPost = {props.addPost}

                        />}/>

                        <Route path="/dialogs" element = { <Dialogs  state={props.state.dialogsPage} />}/>
                        <Route path="/new" element = { <New state={props.state.dialogsPage.dialogs} />} />
                        <Route path="/music" element = {<Music />} />
                        <Route path="/setting" element = {<Setting />}/>
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register />}/>
                    </Routes>
                </div>
            </div>
    )
}


export default App