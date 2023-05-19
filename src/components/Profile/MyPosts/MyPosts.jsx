import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";

function MyPosts(props) {
    let posts = props.posts

    let newPostElement = React.createRef()
    const profileElement = posts.map((el) => <Post
        key={el.id}
        name={el.name}
        likesCount={el.likesCount}
        img={el.img}
        message={el.message}
    />)


    let onPostChange = () => {
        let textArea = newPostElement.current.value
        props.addPastChange(textArea)
    }

    let onClickAddPost = () => {
        props.addPostProfile()
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div className='d-flex'>
                {/*<div>*/}
                {/*    <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}/>*/}
                {/*</div>*/}
                {/*`${s.nav} ${s.item} ${s.white}`*/}
                <div className={`${s.textArea}`}>
                    <textarea className="form-control" placeholder="Leave a comment here" onChange={onPostChange} ref={ newPostElement } value={props.newPostText}
                              id="floatingTextarea"></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPost} className={`${'btn'} ${'btn-success'} ${s.button}`}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { profileElement }
            </div>
        </div>)
}

export default MyPosts
