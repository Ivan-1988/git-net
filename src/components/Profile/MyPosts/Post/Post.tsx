import React from 'react';
import s from './Post.module.css';

function Post() {
    return (
            <div className={s.item}>
                <img src="https://im0-tub-ru.yandex.net/i?id=5a780cddd7af4b285bf5d035a016f0ae&ref=rim&n=33&w=148&h=150" alt=""/>
                post1
                <div>
                    <span>like</span>
                </div>
            </div>
    )
}

export default Post;