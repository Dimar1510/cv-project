import React from 'react';
import ResumeEducationItem from './ResumeEducationItem';
import '../styles/ResumeSection.css'

function ResumeEducationList(props) {
    if (props.educations.length !==0) 
    return (  
        <section className="resume-list">
            <h2>Education</h2>
            {props.educations.map(item => {
                return (
                    <ResumeEducationItem {...item} key = {item.id}/>
                )
            })}
            
        </section>
    );
}

export default ResumeEducationList;