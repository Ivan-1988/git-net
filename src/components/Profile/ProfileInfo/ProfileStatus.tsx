import React from 'react';
import s from './ProfileInfo.module.css';
import {findAllByDisplayValue} from "@testing-library/react";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfilePropsType = {
    status: string
}

class ProfileStatus extends React.Component <ProfilePropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {!this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;