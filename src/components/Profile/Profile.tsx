import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>

}

export default Profile;