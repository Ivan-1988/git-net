import React from "react";
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/image.jpg";
import styles from "./users.module.css";
import axios from "axios";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type PhotoType = {
    small: null | string
    large: null | string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotoType
    status: string
    followed: boolean
}

export type GetStateType = {
    items: Array<UserType>
}

class Users extends React.Component<PropsType> {

    constructor(props: PropsType) {
        super(props);
        axios.get<GetStateType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }


    render(){
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>

                        <img src={u.photos.small != null ? u.photos.small: userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}


export default Users;