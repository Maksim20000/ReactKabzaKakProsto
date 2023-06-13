import React from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    GetStatusThunk,
    setUserProfileAC,
    setUsersThunk,
    toggleIsFetchingACToProfile, updateStatusThunk
} from "../../redux/reducers/Profile-reducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component{


    componentDidMount() {
        let id = this.props.router.params.userId
        if(!id){
            id = this.props.id
        }
        this.props.setUsersThunk(id)
        this.props.GetStatusThunk(id)
    }
    render(){
        console.log('render Profiel')
        if(this.props.redirect){
            return <Navigate to={'/login'} />
        }
        return(
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}



let mapStateToProps = (state) =>{
    return {
        redirect: state.profilePage.redirect,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.userId
    }
}

let dispatches = {
    toggleIsFetchingACToProfile,
    setUserProfileAC,
    setUsersThunk,
    GetStatusThunk,
    updateStatusThunk
}

export default compose(
    withRouter,
    connect(mapStateToProps, dispatches)
)(ProfileContainer)


