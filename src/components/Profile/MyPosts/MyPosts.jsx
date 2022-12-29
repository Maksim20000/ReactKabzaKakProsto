import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";

function MyPosts(props) {
    let postData = [
        {id: 1, message: 'First post', likesCount: 50},
        {id: 2, message: 'Веб шторм топ', likesCount: 546454654},
        {id: 3, message: 'Веб шторм топ', likesCount: 5454},
        {id: 4, message: 'Веб шторм топ', likesCount: 31231},
        {id: 5, message: 'Веб шторм топ', likesCount: 6798763},
        {id: 6, message: 'Веб шторм топ', likesCount: 0}
    ];
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
                <Post message={postData[0].message} num={postData[0].likesCount } />
                <Post message={postData[1].message} num={postData[1].likesCount }/>
                <Post message={postData[2].message} num={postData[2].likesCount }/>
                <Post message={postData[3].message} num={postData[3].likesCount }/>
                <Post message={postData[4].message} num={postData[4].likesCount }/>
                <Post message={postData[5].message} num={postData[5].likesCount }/>

            </div>
        </div>)
}

export default MyPosts
