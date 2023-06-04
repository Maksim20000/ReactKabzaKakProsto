import {LoginReduxForm} from "./loginForm/loginForm";
import {connect} from "react-redux";
import {LoginOutThunk, LoginThunk} from "../../redux/reducers/auth-reduser";
import {Navigate} from "react-router-dom";
import React from "react";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.checkBox)
    }

    if(props.isAuth){
        return <Navigate to={'/profile'} />
    }

    return(
        <div className={'d-flex justify-content-center'}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    LoginThunk,
    LoginOutThunk
})(Login)