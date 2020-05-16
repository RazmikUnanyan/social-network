import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/ Preloader/Preloader";
import withSuspense from "./components/HOC/withSuspense";


//React.lazy
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));




class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>                         // preloader for mine page
        }

        return (
            <div className='app-wrapper'>
                <div className='HeaderContauner'>
                    <HeaderContainer/>
                </div>

                <div className='content'>

                         <Navbar/>

                        <Route path="/dialogs" render = {withSuspense(DialogsContainer)}/>       {/*withSuspense - hoc, который оборачивает в suspense*/}

                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>

                        <Route path="/users" render={withSuspense(UsersContainer)}/>

                        <Route path="/news" render={() => <News/>}/>

                        <Route path="/musics" render={() => <Musics/>}/>

                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <Login/>}/>

                </div>
            </div>)

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,

});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)


