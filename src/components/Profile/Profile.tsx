import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type PropsPostsType = {
    state: ProfilePageType
}

function Profile(props: PropsPostsType) {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
    </div>

}

export default Profile;