import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {AddNewPostForm} from "./NewMessageFormProfile/NewMessageFormProfile";


const MyPosts = React.memo((props) => {
    console.log('render')
    const profileElement = props.posts.map((el, index) => <Post
        key={index}
        name={el.name}
        likesCount={el.likesCount}
        img={el.img}
        message={el.message}
    />)

    const onSubmitAddPost = (formData) => {
        props.addPostProfile(formData.NewMessgeProfile)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div className='d-flex'>
                <AddNewPostForm onSubmit={onSubmitAddPost}
                                {...props}/>
            </div>
            <div className={s.posts}>
                {profileElement}
            </div>
        </div>)
})

export default MyPosts
