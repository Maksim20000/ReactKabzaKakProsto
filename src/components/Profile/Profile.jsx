import React from "react";
// import s from './../Profile/Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
class Profile extends React.Component{
    render(){
        return(
            <div>
                <ProfileInfo />
                <MyPosts />
            </div>
        )
        }
}

export default Profile