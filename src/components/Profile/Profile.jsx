import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preoloder} from "../comman/preloader/Preoloder";

function Profile(props) {
    debugger
    if(!props.profile){
        return <Preoloder />
    }

    return (
        <div className={s.whiteBG}>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )

}

export default Profile