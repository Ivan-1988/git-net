import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ProfilePageType, UpdateNewPostTextType} from "../../redux/state";

export type PropsPostsType = {
    profilePage: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostTextType) => void
}

function Profile(props: PropsPostsType) {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
        />
    </div>

}

export default Profile;