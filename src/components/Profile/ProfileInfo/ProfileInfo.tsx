import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

type ProfilePropsType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfilePropsType) {
    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
           {/* <div>
                <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : ''}/>
                <ProfileStatus status={'Hello my friends'} />
            </div>
        </div>
    )
}

export default ProfileInfo;