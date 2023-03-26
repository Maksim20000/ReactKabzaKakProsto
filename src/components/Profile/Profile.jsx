import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={s.whiteBG}>

            <ProfileInfo/>
            <MyPosts
                    state = {props.state}
                     store = {props.store}
            />
        </div>
    )

}

export default Profile