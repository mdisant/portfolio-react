import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for the back button
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { link } = useParams();

    // Find the project with the matching link in ProjectList
    const project = ProjectList.find((p) => p.link === link);

    if (!project) {
        // Handle the case where the project is not found
        return <div>Project not found.</div>;
    }

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <GitHubIcon />

            {/* Add a Back button to navigate back to the portfolio page */}
            <Link to="/portfolio">Back to Portfolio</Link>
        </div>
    );
}

export default ProjectDisplay;
