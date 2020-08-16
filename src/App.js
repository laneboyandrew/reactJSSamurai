import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";


const App = (props) => {
    let navbarElements = props.navbarElements.map(element => <Navbar id={element.id} name={element.name}
                                                                     image={element.image}/>);
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.navbarElements}/>
            <div className='app-wrapper-content'>
                <div>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={updateNewPostText}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </div>
    )
}
export default App;
