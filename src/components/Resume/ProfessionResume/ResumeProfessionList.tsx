import ResumeProfessionItem from "./ResumeProfessionItem";
import { useAppSelector } from "src/app/hooks";
import { selectProfession } from "src/app/profession.slice";

function ResumeProfessionList() {
  const professions = useAppSelector(selectProfession);
  if (professions.length !== 0)
    return (
      <section className="resume-list">
        <h2>Professional Experience</h2>
        {professions.map((item) => {
          return <ResumeProfessionItem {...item} key={item.id} />;
        })}
      </section>
    );
}

export default ResumeProfessionList;
