import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from 'react-router-dom';
import Preloader from "../common/Preloader/Preloader";

type PathParamsType = {
    userId: string | undefined
}

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

export type GetUsersType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    userId: number
    photos: PhotoType
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType ={
    setUserProfile: (profile: GetUsersType) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        //debugger;
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = '2';
        }
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        // if(!this.props.profile)
        //     return <Preloader/>
        return (
            <Profile {...this.props} profile = {this.props.profile} />
        )

    }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType,MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps, {setUserProfile}
)(WithUrlDataContainerComponent);

// const con = (mstp, mdtp) => {
//     return (Component) => {
//         return <ReduxContext.consumer>{(store) => {
//             return <Component {...mstp(store.getState())} {...mdtp(store.dispatch.bind(store))}/>
//         }}</ReduxContext.consumer>
//     }
// }

//<MapStatePropsType,MapDispatchPropsType,RouteComponentProps<PathParamsType>, AppStateType>