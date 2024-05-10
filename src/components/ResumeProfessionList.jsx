import React from 'react';
import ResumeProfessionItem from './ResumeProfessionItem';
import '../styles/ResumeSection.css'

function ResumeProfessionList(props) {
    if (props.professions.length !==0)
    return (  
        <section className="resume-list">
            <h2>Professional Experience</h2>
            {props.professions.map(item => {
                return (
                    <ResumeProfessionItem {...item} key = {item.id}/>
                )
            })}
            
        </section>
    );
}

export default ResumeProfessionList;