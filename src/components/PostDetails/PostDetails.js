import React from 'react';
import './PostDetails.css'
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div className='post-details'>
            <h2>Id: {post[0].id}</h2>
            <h4>Title: {post[0].title}</h4>
            <h6>Body: {post[0].body}</h6>
        </div>
    );
};

export default PostDetails;