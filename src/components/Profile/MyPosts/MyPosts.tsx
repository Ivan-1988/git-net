import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsTypes,
    PostType
} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type PropsMyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: PropsMyPostsType) {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostsElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostsElement.current) {
            props.dispatch(addPostActionCreator());
        }
    }

    let onPostChange = () => {
        if (newPostsElement.current) {
            let text = newPostsElement.current.value;
            // let action: UpdateNewPostTextType = {
            //     type: 'UPDATE-NEW-POST-TEXT',
            //     newText: text
            // };
            let action = updateNewPostTextActionCreator(text);
            props.dispatch(action);
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;