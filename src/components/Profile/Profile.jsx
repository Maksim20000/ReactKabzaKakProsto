import React from "react";
import s from './../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


class Profile extends React.Component{
    render(){
        return(
            <div className={s.content}>
                    <div>
                        <img src="https://avatars.mds.yandex.net/i?id=31cc123c383aea45250e312098cb9eed3b57eabc-7662997-images-thumbs&n=13" />
                    </div>
                    <div className={s.item}>
                        аватар + инфа 
                    </div>
                    <MyPosts />
            </div>
        )
        }
}

export default Profile