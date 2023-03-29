import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPostProfileCreater, updateNewPostTextActionCreater} from "../../../redux/reducers/Profile-reducer";


// function MyPostsContainer(props) {
//     // let state = props.state.profilePage
//     return (
//         <Provider.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().profilePage
//
//                 const dialogsElements = state.postData.map((el) => <Post
//                     name={el.name}
//                     likesCount={el.likesCount}
//                     img={el.img}
//                     message={el.message}
//                 />)
//
//                 let addPastChange = (text) => {
//                     let textArea = text
//                     store.dispatch(updateNewPostTextActionCreater(textArea))
//                 }
//
//                 let addPostProfile = () => {
//                     store.dispatch(addNewPostProfileCreater())
//                 }
//
//                 return(<MyPosts addPastChange={addPastChange}
//                                 addPostProfile={addPostProfile}
//                                 state={state}
//                                 dialogsElementsMap={dialogsElements}/>
//                 )
//             }
//         }
//         </Provider.Consumer>)
// }

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
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
