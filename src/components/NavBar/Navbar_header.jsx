import React from "react";
import s from '../NavBar/Navbar.module.css'
import {NavLink} from "react-router-dom";

class Navbar_header extends React.Component{
    render(){
        return(
            <nav className={s.nav}>
                <div>
                    <div className={s.item}>
                        <NavLink to='/profile'>Profile</NavLink>
                    </div>
                    <div className={`${s.nav} ${s.item}`}>
                        <NavLink to='/dialogs'>Message popoiigcffh</NavLink>
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

                </div>
            </nav>
        )
    }
}


export default Navbar_header
