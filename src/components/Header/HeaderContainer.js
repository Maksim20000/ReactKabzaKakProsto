import React from "react";
import Header from "./Header";
import s from './Header.module.css'
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setPhotoAuth} from "../../redux/reducers/auth-reduser";
class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
            .then(responce => {
                if(responce.data.resultCode === 0){
                    let {login, id, email} = responce.data.data
                    this.props.setAuthUserData(id, email, login)
                }else{
                    alert('Не приходят данные')
                }
        })

        let userId = this.props.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(
            response => {
                this.props.setPhotoAuth(response.data.photos.small)
            }
        )
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
    setPhotoAuth
}

export default connect(mapStateToProps, dispatches)(HeaderContainer)