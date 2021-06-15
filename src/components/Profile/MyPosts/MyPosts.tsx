import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

function MyPosts(props: PropsType) {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostsElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostsElement.current) {
            props.addPost();
        }
    }

    let onPostChange = () => {
        if (newPostsElement.current) {
            let text = newPostsElement.current.value;
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostsElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
