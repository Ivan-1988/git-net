import React from "react";
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/image.jpg";
import styles from "./users.module.css";
import axios from "axios";
import {findAllByDisplayValue} from "@testing-library/react";

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
    totalCount: number
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render(){

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                     return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                     onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })

                }
            </div>
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