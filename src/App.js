import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {Login} from "./components/Login/Login";
import New from "./components/New/New";
import Navbar from "./components/NavBar/Navbar_header";
import {Base} from "./components/Base/Base";
import {Register} from "./components/Register/Register";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext, {Provider} from "./storeContext";


function App(props) {
    return(
        <Provider store={props.store}>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Base/>}/>
                        <Route path="/profile" element={<Profile state={props.state}
                                                                 store={props.store}

                        />}/>

                        <Route path="/dialogs" element={<DialogsContainer store={props.store}
                                                                          state={props.state}
                        />}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/setting" element={<Setting/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}




export default App