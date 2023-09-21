import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

import "../styles/Portfolio.css"

function Portfolio() {
    return (
        <div className="projects">
            <h1> My Personal Portfolio</h1>
            <div className='projectList'>
                {ProjectList.map((project, idx) => {
                    return <ProjectItem id={idx} name={project.name} image={project.image} />;
                })}
            </div>
        </div>
    );
}

export default Portfolio;