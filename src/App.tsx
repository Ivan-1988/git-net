import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, RootStateType, StoreType,} from './redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type stateType = {
    // state: RootStateType
    // dispatch: (action: ActionsTypes) => void
    store: any
    // updateNewPostText: (newText: string) => void
    // type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
}

function App(props: stateType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store} />}/>
                    <Route path={'/profile'}
                           render={() => <Profile
                               store={props.store}
                               // profilePage={props.state.profilePage}
                               // dispatch={props.store.dispatch}
                           />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
