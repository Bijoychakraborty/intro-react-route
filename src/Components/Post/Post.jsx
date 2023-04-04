import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title,body}=post;

    const navigrate = useNavigate();
    const handleNavigration=()=>{
        navigrate(`/post/${id}`);

    }
    return (
        <div className='post'>
           <h5>{id}</h5>
           <h3>{title}+</h3>
         <Link to={`/post/${id}`}>Details</Link> 

         <Link to={`/post/${id}`}><button>Show post Details</button></Link>
         <button onClick={handleNavigration}>With Button Handler</button>
        </div>
    );
};

export default Post;