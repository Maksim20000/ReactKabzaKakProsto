import React from "react";
import s from './../Header/Header.module.css';


class Header extends React.Component{
    render(){
        return(
            <header className={s.header}>
                    <img src="https://w7.pngwing.com/pngs/1009/720/png-transparent-logo-hawk-bird-bird-animals-monochrome-falcon.png" />
            </header>
        )
    }
}

export default Header;