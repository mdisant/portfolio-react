import React from 'react';
import imageData from '../helpers/imageData.json'; // Import the JSON file
import '../styles/Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery">
            {imageData.images.map((imageName, index) => (
                <div key={index} className="gallery-item">
                    {/* Use the imported image name with the extension */}
                    <img src={`/images/${imageName}.jpg`} alt={imageName} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
