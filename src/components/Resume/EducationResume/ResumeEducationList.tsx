import React from "react";
import ResumeEducationItem from "./ResumeEducationItem";
import "src/styles/ResumeSection.css";
import { useAppSelector } from "src/app/hooks";
import { selectEducation } from "src/app/education.slice";

const ResumeEducationList = () => {
  const educations = useAppSelector(selectEducation);
  if (educations.length !== 0)
    return (
      <section className="resume-list">
        <h2>Education</h2>
        {educations.map((item) => {
          return <ResumeEducationItem {...item} key={item.id} />;
        })}
      </section>
    );
};

export default ResumeEducationList;
