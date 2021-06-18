import React from "react";
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import styles from './users.module.css';

type PropsType = MapStateToPropsType & MapDispatchToPropsType

function Users(props: PropsType) {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://img.favpng.com/23/14/21/snow-white-coloring-book-dwarf-drawing-sleepy-png-favpng-vRRVNVU8xX46L1JUiDvfqjaFy_t.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'some string',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://img.favpng.com/23/14/21/snow-white-coloring-book-dwarf-drawing-sleepy-png-favpng-vRRVNVU8xX46L1JUiDvfqjaFy_t.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am here',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://img.favpng.com/23/14/21/snow-white-coloring-book-dwarf-drawing-sleepy-png-favpng-vRRVNVU8xX46L1JUiDvfqjaFy_t.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am here too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>

                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;