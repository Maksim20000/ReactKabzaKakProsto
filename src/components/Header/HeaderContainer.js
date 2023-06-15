import React from "react";
import Header from "./Header";
import s from './Header.module.css'
import {connect} from "react-redux";
import {
    LoginOutThunk,
    setAuthUserDataCreater,
    setPhotoAuthCreator,
    setUsersThunkPhoto
} from "../../redux/reducers/auth-reduser";

const HeaderContainer = (props) => {
    return (
        <div className={s.header}>
            <Header {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}

const dispatches = {
    setAuthUserDataCreater,
    setPhotoAuthCreator,
    LoginOutThunk,
    setUsersThunkPhoto
}

export default connect(mapStateToProps, dispatches)(HeaderContainer)