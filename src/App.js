import React from "react";
import './App.css'
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import LoginPage from "./components/Login/Login";
import New from "./components/New/New";
import Navbar from "./components/NavBar/Navbar_header";
import {Base} from "./components/Base/Base";
import {Register} from "./components/Register/Register";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect, Provider} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reduser";
import {Preoloder} from "./components/comman/preloader/Preoloder";

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

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()

    }

    render() {

        if(!this.props.initialized){
            return <Preoloder />
        }

        return (
            <Provider store={this.props.store}>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/' element={<Base/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/new" element={<New/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/setting" element={<Setting/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                            <Route path='/register' element={<Register/>}/>
                        </Routes>
                    </div>
                </div>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)