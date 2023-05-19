import React from "react";
import Header from "./Header";
import s from './Header.module.css'
import {connect} from "react-redux";
import {authMeThunk, setAuthUserData, setPhotoAuth, setUsersThunk} from "../../redux/reducers/auth-reduser";
class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMeThunk()

        this.props.setUsersThunk(this.props.userId)
    }

    render() {
        return(
            <div className={s.header}>
                <Header {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}

const dispatches = {
    setAuthUserData,
    setPhotoAuth,
    setUsersThunk,
    authMeThunk
}

export default connect(mapStateToProps, dispatches)(HeaderContainer)