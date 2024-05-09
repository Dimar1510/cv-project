import React from 'react';
import ResumePersonal from './ResumePersonal';
import ResumeEducationList from './ResumeEducationList';

function ResumeWrapper(props) {
   
    return (  
        <div className="resume-wrapper">
            <ResumePersonal personal = {props.personal}/>
            <ResumeEducationList educations = {props.educations}/>
        </div>
    );
}

export default ResumeWrapper;