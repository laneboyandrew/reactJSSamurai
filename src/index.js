import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} posts={state.profilePage.postsData}
                 dialogsData={state.dialogsData}
                 messagesData={state.messagesData} answersData={state.answersData}
                 navbarElements={state.sidebar.friendsData}/>
        </BrowserRouter>, document.getElementById('root'));

};



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default rerenderEntireTree();






