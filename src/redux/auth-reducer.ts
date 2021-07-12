import {setUserProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';



//{"data":{"id":17355,"login":"Ivan-1988","email":"eskimosik-vap@mail.ru"},"messages":[],"fieldsErrors":[],"resultCode":0}
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

type ActionsTypes = setAuthUserDataType

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

type setAuthUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number | null,
                            email: string | null,
                            login: string | null) =>
    ({
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const)

export default authReducer;