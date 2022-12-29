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

    let postsElements = postData.map( p => <Post likesCount={p.likesCount} message={p.message} />);

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
                { postsElements }
            </div>
        </div>)
}

export default MyPosts
