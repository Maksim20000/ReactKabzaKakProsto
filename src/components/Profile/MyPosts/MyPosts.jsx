import React from "react";
// import s from './MyPosts.module.css'
import Post from "./post/Post";

class MyPosts extends React.Component{
    render(){
        return(
            <div>
                <div>
                    My post 
                </div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className="posts">
                    <Post message='Hi, gy'  num='50' />
                    <Post message="It's my love. " num='549740'/>

                </div>
            </div>
        )
    }
}

export default MyPosts
