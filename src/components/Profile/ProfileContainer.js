import React from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfileAC, toggleIsFetchingACToProfile} from "../../redux/reducers/Profile-reducer";
import {Preoloder} from "../comman/preloader/Preoloder";
class ProfileContainer extends React.Component{
    componentDidMount() {
        // {this.props.isFetching(true)}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(responce => {
            this.props.setUserProfileAC(responce.data)
        })
        // {this.props.isFetching(false)}
    }

    render(){

        return(
            <div>
                {this.props.isFetching ? <Preoloder /> : null}
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile
    }
}

let dispatches = {
    toggleIsFetchingACToProfile,
    setUserProfileAC
}

export default connect(mapStateToProps, dispatches)(ProfileContainer)