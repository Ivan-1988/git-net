import {setUserProfile} from "./profile-reducer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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

export const setAuthUserData = (userId: number | null,
                            email: string | null,
                            login: string | null) =>
    ({
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const)

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                // debugger;
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;