import React from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <TwitterIcon />
                <LinkedInIcon />
                <GitHubIcon />
            </div>
            <div className="contactInfo">
                mikepdi@yahoo.com | 914-403-1696
            </div>
            <p> &copy; 2023 Michael Pierce DiSanto. All rights reserved.</p>
        </div>
    );
}

export default Footer;