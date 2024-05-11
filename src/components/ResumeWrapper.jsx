import React from 'react';
import ResumePersonal from './ResumePersonal';
import ResumeEducationList from './ResumeEducationList';
import ResumeProfessionList from './ResumeProfessionList';
import ResumeAbout from './ResumeAbout';
import ResumeSkills from './ResumeSkills';
import '../styles/ResumeWrapper.css'

const ResumeWrapper = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="resume-wrapper">
            <ResumePersonal personal = {props.personal}/>
            <ResumeEducationList educations = {props.educations}/>
            <ResumeProfessionList professions = {props.professions}/>
            <ResumeAbout about = {props.personal.about}/>
            <ResumeSkills skills = {props.personal.skills}/>
        </div>
    );
  });

export default ResumeWrapper;