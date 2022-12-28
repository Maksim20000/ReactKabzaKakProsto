import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";

class MyPosts extends React.Component {
    render() {
        return (
            <div className={s.postsBlock}>
                <div>
                    <h3>My post</h3>
                </div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, gy' num='50'/>
                    <Post message="It's my love. " num='549740'/>

                </div>
            </div>
        )
    }
}

export default MyPosts
