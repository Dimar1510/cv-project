import React from "react";
import { selectPersonalDetails } from "src/app/personal.slice";
import { useAppSelector } from "src/app/hooks";

const ResumeAbout = () => {
  const { about } = useAppSelector(selectPersonalDetails);
  if (about.length > 0)
    return (
      <section className="resume-list">
        <h2>About me</h2>
        <p>{about}</p>
      </section>
    );
};

export default ResumeAbout;
