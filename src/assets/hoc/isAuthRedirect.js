import React from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }

    let connectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connectedRedirectComponent
}