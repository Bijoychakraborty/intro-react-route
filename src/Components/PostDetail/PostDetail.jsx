import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const {id,title,userId}=post;
    const navigrate = useNavigate();


    const handleGoBack=()=>{
      navigrate(-1);
    }
    return (
        <div>
            <h1>every post detail are here:{post.lenght}</h1>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;