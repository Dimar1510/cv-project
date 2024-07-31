import React, { FC } from "react";
import { IProfession } from "src/app/types";

const ResumeProfessionItem: FC<IProfession> = ({
  company,
  description,
  start,
  end,
  location,
  position,
}) => {
  return (
    <div className="profession-item">
      <ul>
        <li className="dates">
          {start} - {end}
        </li>
        <li className="company">{company}</li>
        <li className="company-location">{location}</li>
        <li className="position">{position}</li>
        <li className="description">{description}</li>
      </ul>
    </div>
  );
};

export default ResumeProfessionItem;
