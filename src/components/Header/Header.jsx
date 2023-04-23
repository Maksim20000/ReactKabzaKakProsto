import React from "react";
import s from './../Header/Header.module.css';
import VkIcon from '../../assets/img/vk-icon-React.png'

class Header extends React.Component{
    render(){
        return(
            <header className={s.header}>
                    <img src={VkIcon} alt={'ЛАЛАЛАЛ'}/>
            </header>
        )
    }
}

export default Header;