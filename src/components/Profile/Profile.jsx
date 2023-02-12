import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={s.whiteBG}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}
                     newPostText={props.newPostText}
                     addPost = {props.addPost}
                     valueArea={props.valueArea}
                     changeNewPost ={props.changeNewPost}
            />
        </div>
    )

}

export default Profile