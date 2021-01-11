import React, { useState } from 'react';

import CollageItem from '../collage-item';

const Collage = () => {
    const [images, setImages] = useState(null);
    let imageArr = [];

    for (let imageIdx = 0; imageIdx < 12; imageIdx++) {
        imageArr.push(<CollageItem />)
    }

    return (
        <div className="collage">
            {imageArr}
        </div>
    )
};

export default Collage;