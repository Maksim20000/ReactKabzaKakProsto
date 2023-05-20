import React from "react";
import s from '../NavBar/Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar(props) {


    return (

        <nav className={`${s.nav} ${s.white}`}>
            <div>
                <div className={s.item}>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/profile'>Profile</NavLink>
                </div>
                <div className={`${s.nav} ${s.item} ${s.white}`}>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/dialogs'>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/Users'>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/new'>New</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/music'>Music</NavLink>
                </div>
                <div>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/setting'>Setting</NavLink>
                </div>
                <div>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/register'>Register</NavLink>
                </div>
                <div className={`${s.nav} ${s.item} ${s.white}`}>
                    <NavLink className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/login'>Login</NavLink>
                </div>

            </div>
        </nav>
    )

}


export default Navbar
