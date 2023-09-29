import React, { useState } from "react";

const FilterButtons = ({ skills, onFilter }) => {
    const handleFilter = (selectedSkills) => {
        onFilter(selectedSkills);
    };

    return (
        <div>
            <button onClick={() => handleFilter([])}>All</button>
            {skills.map((skill) => (
                <button key={skill} onClick={() => handleFilter([skill])}>
                    {skill}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;