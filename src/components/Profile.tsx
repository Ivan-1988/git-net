import React from 'react';
import s from './Profile.module.css';

function Profile () {
    return <div className={s.content}>
        <div>
            <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    </div>


}

export default Profile;