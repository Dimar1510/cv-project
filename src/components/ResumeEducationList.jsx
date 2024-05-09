import React from 'react';
import ResumeEducationItem from './ResumeEducationItem';

function ResumeEducationList(props) {

    return (  
        <div className="resume-list">
            <h2>Education</h2>
            {props.educations.map(item => {
                return (
                    <ResumeEducationItem {...item} key = {item.id}/>
                )
            })}
            
        </div>
    );
}

export default ResumeEducationList;