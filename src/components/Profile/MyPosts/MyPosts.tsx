import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsTypes,
    PostType
} from "../../../redux/store";


type PropsMyPostsType = {
    posts: Array<PostType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    updateNewPostText: (text: string) => void
    addPost: () => void

}

function MyPosts(props: PropsMyPostsType) {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostsElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostsElement.current) {
            props.addPost();
            // props.dispatch(addPostActionCreator());
        }
    }

    let onPostChange = () => {
        if (newPostsElement.current) {
            let text = newPostsElement.current.value;
            props.updateNewPostText(text);

            // let action = updateNewPostTextActionCreator(text);
            // props.dispatch(action);
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