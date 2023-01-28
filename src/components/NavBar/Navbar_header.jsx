import React from "react";
import s from '../NavBar/Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar(props) {


    return (

        <nav className={`${s.nav} ${s.white}`}>
            <div>
                <div className={s.item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={`${s.nav} ${s.item} ${s.white}`}>
                    <NavLink to='/dialogs'>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/new'>New</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music'>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/setting'>Setting</NavLink>
                </div>
                <div>
                    <NavLink to='/register'>Register</NavLink>
                </div>

            </div>
        </nav>
    )

}


export default Navbar
