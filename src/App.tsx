import { useRef } from "react";

import FormPersonal from "./components/Forms/PersonalForm/FormPersonal";
import FormSkills from "./components/Forms/PersonalForm/FormSkills";
import ResumePersonal from "./components/Resume/PersonalResume/ResumePersonal";
import ResumeAbout from "./components/Resume/PersonalResume/ResumeAbout";
import ResumeSkills from "./components/Resume/PersonalResume/ResumeSkills";
import ResumeEducationList from "./components/Resume/EducationResume/ResumeEducationList";
import FormEducationList from "./components/Forms/EducationForm/FormEducationList";
import FormProfessionList from "./components/Forms/ProfessionForm/FormProfessionList";
import ResumeProfessionList from "./components/Resume/ProfessionResume/ResumeProfessionList";
import { useReactToPrint } from "react-to-print";
import UtilitySection from "./components/UtilitySection/UtilitySection";
import "./styles/buttons.scss";
import "./styles/FormWrapper.scss";
import "./styles/ResumeWrapper.scss";
import ImportExport from "./components/UtilitySection/ImportExport";
import { useAppSelector } from "./app/hooks";
import { selectPersonalDetails } from "./app/personal.slice";

const App = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { name } = useAppSelector(selectPersonalDetails);
  const handlePrint = useReactToPrint({
    documentTitle: `${name.split(" ").join("_")}_CV`,
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="form-wrapper">
        <div className="form-section utils">
          <UtilitySection handlePrint={handlePrint} />
          <ImportExport />
        </div>
        <FormPersonal />
        <FormEducationList />
        <FormProfessionList />
        <FormSkills />
      </div>

      <div ref={componentRef} className="resume-wrapper">
        <ResumePersonal />
        <ResumeEducationList />
        <ResumeProfessionList />
        <ResumeAbout />
        <ResumeSkills />
      </div>
    </>
  );
};

export default App;
