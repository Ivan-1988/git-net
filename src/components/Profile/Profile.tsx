import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div>
        <div>
            <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>

}

export default Profile;