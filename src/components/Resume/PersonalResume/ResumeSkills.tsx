import { useAppSelector } from "src/app/hooks";
import { selectSkills } from "src/app/personal.slice";

const ResumeSkills = () => {
  const skills = useAppSelector(selectSkills);
  if (skills.length > 0)
    return (
      <section className="resume-list">
        <h2>Key Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => {
            return (
              <span key={index} className="skill">
                {skill}
              </span>
            );
          })}
        </div>
      </section>
    );
};

export default ResumeSkills;
