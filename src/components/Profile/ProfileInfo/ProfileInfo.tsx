import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfilePropsType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfilePropsType) {
    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : ''}/>
                ava + description
            </div>
        </div>
    )

}

export default ProfileInfo;