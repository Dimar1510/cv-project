import { FC } from "react";
import { IEducation } from "src/app/types";

const ResumeEducationItem: FC<IEducation> = ({
  degree,
  location,
  school,
  start,
  end,
}) => {
  return (
    <div className="education-item">
      <ul>
        <li className="dates">
          {start} - {end}
        </li>
        <li className="school">{school}</li>
        <li className="school-location">{location}</li>
        <li className="degree">{degree}</li>
      </ul>
    </div>
  );
};

export default ResumeEducationItem;
