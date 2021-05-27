import React from 'react';
import s from './Profile.module.css';
//import MyPosts, {MyPostsContainer} from "./MyPosts/MyPosts";
// import MyPosts, {MyPostsContainer} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType,} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type PropsPostsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
    store: any
}

function Profile() {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>

}

export default Profile;