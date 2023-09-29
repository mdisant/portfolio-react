import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location]);

    return (
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to="/" class='MD'>Michael DiSanto</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/gallery">Gallery</Link>
                <a href="/DiSanto_Michael_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div >
    );
}

export default Navbar;