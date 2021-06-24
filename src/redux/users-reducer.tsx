// import {ActionsTypes, PostType, ProfilePageType} from "./store";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type PhotoType = {
    small: null | string
    large: null | string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotoType
    status: string
    followed: boolean
}


export type InitialStateType = {
    users: Array<UserType>
}

export type ActionsTypes = followACType | unfollowACType | setUsersACType

let initialState = {
    users: [
        /*{id: 1, photoUrl: 'https://img.favpng.com/23/14/21/snow-white-coloring-book-dwarf-drawing-sleepy-png-favpng-vRRVNVU8xX46L1JUiDvfqjaFy_t.jpg', followed: false, fullName: 'Dmitry', status: 'some string', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://img.favpng.com/23/14/21/snow-white-coloring-book-dwarf-drawing-sleepy-png-favpng-vRRVNVU8xX46L1JUiDvfqjaFy_t.jpg', followed: true, fullName: 'Sasha', status: 'I am here', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://img.favpng.com/23/14/21/snow-white-coloring-book-dwarf-drawing-sleepy-png-favpng-vRRVNVU8xX46L1JUiDvfqjaFy_t.jpg', followed: false, fullName: 'Andrew', status: 'I am here too', location: {city: 'Kiev', country: 'Ukraine'}}
    */]
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET_USERS":{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)


export default usersReducer;