import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {

    const friend =useLoaderData();
    // console.log(data);
    return (
        <div>
            <h1>every thing about a single friend</h1>
        </div>
    );
};

export default FriendDetails;