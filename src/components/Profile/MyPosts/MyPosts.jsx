import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";

function MyPosts(props) {
    let postsElements = props.postData.map( p => <Post likesCount={p.likesCount} message={p.message} img={p.img} name={p.name}/>);

    let newPostElement = React.createRef();

    let addClick = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    let addChangArea = () => {

    })

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea ref= { newPostElement } value = 'Прив' onChange={ props.newPostText } />
                </div>
                <div>
                    <button onClick={ addClick }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>)
}

export default MyPosts
