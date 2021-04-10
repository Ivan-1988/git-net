import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )

}

export default ProfileInfo;