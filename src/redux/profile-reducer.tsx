// import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 2, message: "Blabla", likesCount: 11},
            {id: 2, message: "Dada", likesCount: 11}
        ],
        newPostText: 'it-kamasutra.com'
    }

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type){
        case ADD_POST:{
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const)

export default profileReducer;