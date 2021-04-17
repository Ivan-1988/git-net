import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogsType, messageType, PostsType} from '.';

export type PropsType = {
    posts: Array<PostsType>
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}


function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render = { () => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                    <Route path={'/profile'} render = { () => <Profile posts={props.posts}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
