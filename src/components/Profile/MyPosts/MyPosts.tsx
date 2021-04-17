import React from 'react';
import { PostsType } from '../../..';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PropsPostsType} from "../Profile";


/*type PropsPostsType = {
    posts: Array<PostsType>
}*/

function MyPosts(props: PropsPostsType) {

 /*   let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 2, message: "Blabla", likesCount: 11},
        {id: 2, message: "Dada", likesCount: 11}
    ]*/

    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;