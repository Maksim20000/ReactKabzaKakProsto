import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPostProfileCreater, updateNewPostTextActionCreater} from "../../../redux/reducers/Profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPastChange: (text) => {
            let action = updateNewPostTextActionCreater(text)
            dispatch(action)
        },
        addPostProfile: () => {
            let action = addNewPostProfileCreater()
            dispatch(action)
        }
    }
}



let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
