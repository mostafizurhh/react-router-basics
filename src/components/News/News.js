import React from 'react';
import './News.css'
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const News = () => {
    const posts = useLoaderData();/* dynamic data loading */
    return (
        <div className='news'>
            {
                posts.map(post => <Post
                    key={post.id}
                    post={post}
                ></Post>)
            }
        </div>
    );
};

export default News;