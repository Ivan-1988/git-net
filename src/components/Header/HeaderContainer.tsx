import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    //isFetching: boolean
}

type GetStateType = {
    resultCode: number,
    messages: [],
    data: DataType
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

export type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);