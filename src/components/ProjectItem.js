import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, link }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Log the link before navigating
        console.log("Link:", link);
        // Navigate to the project display page with the appropriate link
        navigate(`/portfolio/${link}`);
    }

    return (
        <div className='projectItem' onClick={handleClick}>
            <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
            <h1>{name}</h1>
        </div>
    );
}

export default ProjectItem;