import React, { useState, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

import "../styles/Portfolio.css";

function Portfolio() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState(ProjectList);

    const toggleFilter = (skill) => {
        if (selectedFilters.includes(skill)) {
            setSelectedFilters(selectedFilters.filter(selected => selected !== skill));
        } else {
            setSelectedFilters([...selectedFilters, skill]);
        }
    };

    const resetFilters = () => {
        setSelectedFilters([]);
    };

    useEffect(() => {
        if (selectedFilters.length === 0) {
            setFilteredProjects(ProjectList);
        } else {
            const filtered = ProjectList.filter(project =>
                selectedFilters.some(skill => project.skills.includes(skill))
            );
            setFilteredProjects(filtered);
        }
    }, [selectedFilters]);

    const uniqueSkills = [...new Set(ProjectList.flatMap(project => project.skills.split(', ')))];

    return (
        <div className="projects">
            <h1>My Personal Portfolio</h1>
            <div className='filterButtons'>
                {uniqueSkills.map(skill => (
                    <button
                        key={skill}
                        className={selectedFilters.includes(skill) ? 'active' : ''}
                        onClick={() => toggleFilter(skill)}
                    >
                        {skill}
                    </button>
                ))}
            </div>
            <div className='filterButtons'>
                <button onClick={resetFilters}>Reset</button>
            </div>
            <div className='projectList'>
                {filteredProjects.map((project, idx) => {
                    return <ProjectItem key={idx} name={project.name} image={project.image} />;
                })}
            </div>
        </div>
    );
}

export default Portfolio;