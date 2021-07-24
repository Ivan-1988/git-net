import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    //isFetching: boolean
}

export type GetStateHeaderType = {
    resultCode: number,
    messages: [],
    data: DataType
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

export type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData();

    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);