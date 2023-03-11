import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";

function MyPosts(props) {

    let newPostElement = React.createRef();

    const dialogsElements = props.postData.map((el) => <Post
        name={el.name}
        likesCount={el.likesCount}
        img={el.img}
        message={el.message}
    />)


    let addPastChange = () => {
        let textArea = newPostElement.current.value
        let dispatch = { type: 'UPDATE-NEW-POST-TEXT', text: textArea }
        props.dispatch(dispatch)
    }

    let addPost = () => {
        let dispatch = { type: 'ADD-POST'}
        props.dispatch(dispatch)
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={addPastChange} ref={ newPostElement } value={props.valueArea}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { dialogsElements }
            </div>
        </div>)
}

export default MyPosts
