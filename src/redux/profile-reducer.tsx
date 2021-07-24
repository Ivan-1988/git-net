import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}

type PhotoType = {
    small: null | string
    large: null | string
}

export type ProfileType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    userId: number
    photos: PhotoType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

type ActionsTypes = addPostActionCreatorType | updateNewPostTextActionCreatorType | setUserProfileType

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const updateNewPostTextActionCreator = (text: string) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const)
export const getUserProfile = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}


export default profileReducer;