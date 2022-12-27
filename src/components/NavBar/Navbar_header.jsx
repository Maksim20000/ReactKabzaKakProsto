import React from "react";
import s from '../NavBar/Navbar.module.css'

class Navbar_header extends React.Component{
    render(){
        return(
            <nav className={s.nav}>
                <div>
                        <div className={s.item}>
                            <a href='/profile'>Profile</a>
                        </div>
                        <div className={`${s.nav} ${s.item}`}>
                            <a href='/dialogs'>Message</a>
                        </div>
                        <div className={s.item}>
                            <a href='/new'>New</a>
                        </div>
                        <div className={s.item}>
                            <a href='/music'>Music</a>
                        </div>
                        <div>
                            <a href='/setting'>Setting</a>
                        </div>
                        
                </div>
            </nav>
        )
    }
}

export default Navbar_header
