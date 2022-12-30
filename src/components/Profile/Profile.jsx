import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={s.whiteBG}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    )

}

export default Profile