import React, { useState, useEffect, useContext } from 'react';

import Spinner from '../spinner';
import { FilterContext} from "../portfolio";

const getImageUrl = async (url) => {
    return await fetch(url)
        .then((response) => response.url)
        .catch((e) => { 
            throw new Error(`Could not fetch ${url}` +
    `, received ${res.status}`);
}); 
};

const CollageItem = () => {
    const [filter] = useContext(FilterContext);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        getImageUrl(`https://source.unsplash.com/220x187/?${filter.replace(/\s/g, '')}`).then((url) => {
            setLoading(false);
            setImageUrl(url);
        });
        return (() => {
            setLoading(true)
            console.log(filter, loading);
        })
    }, [ filter ])
    
    if (loading){
        return <Spinner />
    }
    
    return (
        <img src={imageUrl} alt="" className="collage__image" />
    )
};

export default CollageItem;