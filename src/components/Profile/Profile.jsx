import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileTestStatus} from "./ProfileStatus/ProfileStatus";

function Profile(props) {

    return (
        <div className={s.whiteBG}>

            <ProfileInfo profile={props.profile}/>
            <ProfileTestStatus status={props.status}
                               updateStatusThunk={props.updateStatusThunk}
            />
            <MyPostsContainer />
        </div>
    )

}

export default Profile