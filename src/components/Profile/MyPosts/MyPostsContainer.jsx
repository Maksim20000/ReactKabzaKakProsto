import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPostProfileCreater, updateNewPostTextActionCreater} from "../../../redux/reducers/Profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let dispatches = {
    addPastChange: updateNewPostTextActionCreater,
    addPostProfile:addNewPostProfileCreater
}



let MyPostsContainer = connect(mapStateToProps, dispatches)(MyPosts)

export default MyPostsContainer
