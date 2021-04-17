import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

export type PropsPostsType = {
    posts: Array<PostsType>
}

function Profile(props: PropsPostsType) {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>

}

export default Profile;