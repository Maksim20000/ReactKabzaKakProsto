import React from "react";
import MyPosts from "./MyPosts";
import {addNewPostProfileCreater, updateNewPostTextActionCreater} from "../../../redux/reducers/Profile-reducer";
import Post from "./post/Post";

function MyPostsContainer(props) {

    let state = props.state.profilePage

    const dialogsElements = state.postData.map((el) => <Post
        name={el.name}
        likesCount={el.likesCount}
        img={el.img}
        message={el.message}
    />)

    let addPastChange = (text) => {
        let textArea = text
        props.store.dispatch(updateNewPostTextActionCreater(textArea))
    }

    let addPostProfile = () => {
        props.store.dispatch(addNewPostProfileCreater())
    }


    return (
        <MyPosts addPastChange={addPastChange}
                 addPostProfile={addPostProfile}
                 state={state}
                 dialogsElementsMap={dialogsElements}
        />
    )
}

export default MyPostsContainer
