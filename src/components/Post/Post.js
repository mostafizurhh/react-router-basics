import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { title, body, id } = post;
    return (
        <div className='posts'>
            <h6>Title: <Link to={`/news/${id}`}>{title}</Link></h6> {/* create dynamic link */}
            <p>{body}</p>
        </div>
    );
};

export default Post;