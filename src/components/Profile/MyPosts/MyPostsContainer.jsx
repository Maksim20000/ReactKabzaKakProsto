import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPostProfileCreater} from "../../../redux/reducers/Profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let dispatches = {
    addPostProfile:addNewPostProfileCreater
}



let MyPostsContainer = connect(mapStateToProps, dispatches)(MyPosts)

export default MyPostsContainer
