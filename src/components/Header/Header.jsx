import React from "react";
import s from './../Header/Header.module.css';
import VkIcon from '../../assets/img/vk-icon-React.png'
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import defaultAvatar from './../../assets/img/defaultAvatarUser.jpg'

class Header extends React.Component{
    render(){
        return(
            <header>
                    <img src={VkIcon} alt={'ЛАЛАЛАЛ'}/>

                    <div className={s.loginBlog}>

                        { this.props.isAuth ? 
                            <div className={'d-flex'} style={{marginTop: '-10px'}}>
                                {this.props.photo ? <img src={this.props.photo} className={s.imgAva} alt="ава"/>:
                                    <img src={defaultAvatar} className={s.imgAva}  alt={'дефолтная ава'}/>
                                }

                                <h3 className={s.titleName}>{this.props.login}</h3>
                            </div>
                            :
                            <NavLink to={'/login'}><Button variant="outline-dark">Login</Button></NavLink>
                        }

                    </div>
            </header>
        )
    }
}

export default Header;