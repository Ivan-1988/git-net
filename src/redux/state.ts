import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';*/

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type MessagePageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType
    sidebar: any
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType

    dispatch: (action: ActionsTypes) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageBodyType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

export type SendMessageType = {
    type: 'SEND_MESSAGE'
}


export type ActionsTypes = AddPostActionType |
    UpdateNewPostTextType |
    UpdateNewMessageBodyType |
    SendMessageType;

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 2, message: "Blabla", likesCount: 11},
                {id: 2, message: "Dada", likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Art'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: { }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //{ type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);


    }
}

/*type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>*/

/*export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const)*/

/*export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)*/


export default store;

