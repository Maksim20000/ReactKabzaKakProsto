import React from "react";
import MyPosts from "./MyPosts";
import {addNewPostProfileCreater, updateNewPostTextActionCreater} from "../../../redux/reducers/Profile-reducer";
import Post from "./post/Post";
import StoreContext from "../../../storeContext";
import storeContext from "../../../storeContext";

function MyPostsContainer(props) {

    // let state = props.state.profilePage
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage

                const dialogsElements = state.postData.map((el) => <Post
                    name={el.name}
                    likesCount={el.likesCount}
                    img={el.img}
                    message={el.message}
                />)

                let addPastChange = (text) => {
                    let textArea = text
                    store.dispatch(updateNewPostTextActionCreater(textArea))
                }

                let addPostProfile = () => {
                    store.dispatch(addNewPostProfileCreater())
                }

                return(<MyPosts addPastChange={addPastChange}
                                addPostProfile={addPostProfile}
                                state={state}
                                dialogsElementsMap={dialogsElements}/>
                )
            }
        }
        </StoreContext.Consumer>)
}

export default MyPostsContainer
