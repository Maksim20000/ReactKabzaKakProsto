import React from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfileAC, setUsersThunk, toggleIsFetchingACToProfile} from "../../redux/reducers/Profile-reducer";
import {
    useLocation,
        useNavigate,
        useParams,
} from "react-router-dom";

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
        let userId = this.props.router.params.userId
        if(!userId){
            userId = 2
        }
        this.props.setUsersThunk(userId)
    }
    render(){
        return(
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile
    }
}

let dispatches = {
    toggleIsFetchingACToProfile,
    setUserProfileAC,
    setUsersThunk
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, dispatches)(withUrlDataContainerComponent)