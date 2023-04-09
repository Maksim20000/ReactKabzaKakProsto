import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";

function MyPosts(props) {
    let posts = props.posts

    let newPostElement = React.createRef()
    const profileElement = posts.map((el) => <Post
        name={el.name}
        likesCount={el.likesCount}
        img={el.img}
        message={el.message}
    />)


    let onPostChange = () => {
        let textArea = newPostElement.current.value
        props.addPastChange(textArea)
        // props.store.dispatch(updateNewPostTextActionCreater(textArea))
    }

    let onClickAddPost = () => {
        props.addPostProfile()

        // props.store.dispatch(addNewPostProfileCreater())
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onClickAddPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { profileElement }
            </div>
        </div>)
}

export default MyPosts
