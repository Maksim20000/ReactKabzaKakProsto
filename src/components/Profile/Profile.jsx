import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <div className={s.whiteBG}>

            <ProfileInfo/>
            <MyPostsContainer
                    state = {props.state}
                     store = {props.store}
            />
        </div>
    )

}

export default Profile