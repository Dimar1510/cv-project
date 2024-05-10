import React from 'react';
import ResumePersonal from './ResumePersonal';
import ResumeEducationList from './ResumeEducationList';
import ResumeProfessionList from './ResumeProfessionList';
import '../styles/ResumeWrapper.css'

const ResumeWrapper = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="resume-wrapper">
            <ResumePersonal personal = {props.personal}/>
            <ResumeEducationList educations = {props.educations}/>
            <ResumeProfessionList professions = {props.professions}/>
        </div>
    );
  });

export default ResumeWrapper;