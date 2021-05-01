import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsMyPostsType = {
    posts: Array<PostType>
    newPostText:string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function MyPosts(props: PropsMyPostsType) {

    let postsElements =
        props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostsElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostsElement.current) {
            props.addPost();
        }
    }

    let onPostChange = () => {
        if (newPostsElement.current){
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
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;