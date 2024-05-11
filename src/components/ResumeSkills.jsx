import React from 'react';

function ResumeSkills(props) {
    if (props.skills.length > 0)
    return (  
        <section className="resume-list">
            <h2>Skills</h2>
            <div className='skills'>
                {props.skills.map((skill, index) => {
                    return <span key={index} className='skill'>{skill}</span>
                })}
            </div>
        </section>
    );
}

export default ResumeSkills;