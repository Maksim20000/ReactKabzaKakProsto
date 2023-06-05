import React from "react";
import s from './../Header/Header.module.css';
import VkIcon from '../../assets/img/vk-icon-React.png'
import {NavLink} from "react-router-dom";
import {Button, DropdownButton} from "react-bootstrap";
import defaultAvatar from './../../assets/img/defaultAvatarUser.jpg'
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends React.Component{
    render(){
        return(
            <header>
                    <img src={VkIcon} alt={'ЛАЛАЛАЛ'}/>

                    <div className={`${s.loginBlog} ${'align-items-center d-flex'}`}>

                        { this.props.isAuth ? 
                            <div className={'d-flex '} style={{marginTop: '-10px'}}>
                                {this.props.photo ? <img src={this.props.photo} className={s.imgAva} alt="ава"/>:
                                    <img src={defaultAvatar} className={s.imgAva}  alt={'дефолтная ава'}/>
                                }

                                <h3 className={s.titleName}>{this.props.login}</h3>
                                <div className={'align-items-center'}>
                                    <DropdownButton id="dropdown-basic-button" title="Настройки" className={'mt-0 m-lg-2'}>
                                        <Dropdown.Item href="#/action-1">
                                            actin</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><button className={'btn btn-danger'} onClick={this.props.LoginOutThunk}>
                                            logOut
                                        </button></Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                            : <NavLink to={'/login'}><Button variant="outline-dark">Login</Button></NavLink>
                        }

                    </div>
            </header>
        )
    }
}



export default Header;