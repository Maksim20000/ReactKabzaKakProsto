import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {
    addNewPostProfileCreater,
    updateNewPostTextActionCreater
} from "../../../redux/reducers/Profile-reducer";

function MyPosts(props) {

    let state = props.state.profilePage
    let newPostElement = React.createRef();


    const dialogsElements = state.postData.map((el) => <Post
        name={el.name}
        likesCount={el.likesCount}
        img={el.img}
        message={el.message}
    />)


    let addPastChange = () => {
        let textArea = newPostElement.current.value
        props.store.dispatch(updateNewPostTextActionCreater(textArea))
    }

    let addPostProfile = () => {
        props.store.dispatch(addNewPostProfileCreater())
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={addPastChange} ref={ newPostElement } value={props.state.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostProfile}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { dialogsElements }
            </div>
        </div>)
}

export default MyPosts
