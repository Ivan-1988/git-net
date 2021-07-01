// import {ActionsTypes, PostType, ProfilePageType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type ActionsTypes = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setUsersTotalCountACType

let initialState = {
    users: [ ],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 2
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
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE":{
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT":{
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)


export default usersReducer;