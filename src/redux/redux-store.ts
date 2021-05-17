import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer

});

let store = createStore(reducers);

export default store;

//type AppStateType = ReturnType<typeof reducers>
//type AppStateType = ReturnType<typeof reducers>
//export type StoreType = typeof rootReducer
// export type AppStateType = ReturnType<StoreType>