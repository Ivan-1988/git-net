import {renderEntireTree} from "../render";

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
    posts : Array<PostType>
}

export type MessagePageType = {
    dialogs : Array<DialogType>
    messages : Array<MessageType>
}

export type RootStateType = {
    profilePage : ProfilePageType
    dialogsPage: MessagePageType
}

let state: RootStateType  = {
    profilePage : {
        posts : [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 2, message: "Blabla", likesCount: 11},
            {id: 2, message: "Dada", likesCount: 11}
        ]

    },
    dialogsPage: {
        dialogs : [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Art'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    }
}

export let addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}


export default state;

