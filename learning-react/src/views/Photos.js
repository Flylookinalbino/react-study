import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = "https://source.unsplash.com/random";

const Photos = () => {
    const[photo, setPhoto] = useState(null);

    useEffect(()=>{
        axios.get(url)
        .then(res => setPhoto(res.data))
    }, [url]) 

    return (photo)? 
    (   
        <div>
            <h1>Photo Gallary</h1>
            <img 
                src={photo[3].thumbnailUrl} 
                alt="photo"
            />
        </div>
    ):(<h1>Photo State Has No Data...</h1>);
}

export default Photos;
