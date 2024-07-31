import { useState } from "react";
import FormEducationItem from "./FormEducationItem";
import { mdilDelete, mdilPlus } from "@mdi/light-js";
import { mdiChevronDown, mdiSchoolOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useAppSelector } from "src/app/hooks";
import { selectEducation } from "src/app/education.slice";
import { IEducation } from "src/app/types";
import { useActions } from "src/app/useActions";

const initialEducation: IEducation = {
  id: "",
  school: "",
  degree: "",
  start: "",
  end: "",
  location: "",
};

const FormEducationList = () => {
  const educations = useAppSelector(selectEducation);
  const [editItem, setEditItem] = useState<null | IEducation>(null);
  const { deleteEducation } = useActions();

  return (
    <div className="form-section">
      <h2>
        <Icon path={mdiSchoolOutline} size={1} />
        Education
      </h2>
      {educations.map((item) => (
        <div
          className="form-item-header"
          onClick={() => setEditItem(item)}
          key={item.id}
        >
          <h3 className="form-item-text">
            {item.school}
            <Icon path={mdiChevronDown} size={1} />
          </h3>
          <button
            className="btn-delete"
            onClick={(e) => {
              e.stopPropagation();
              deleteEducation(item.id);
            }}
          >
            <Icon path={mdilDelete} size={1} />
          </button>
        </div>
      ))}
      <FormEducationItem item={editItem} setEditItem={setEditItem} />
      {!editItem && (
        <button
          className="btn-add"
          onClick={() => setEditItem(initialEducation)}
        >
          <Icon path={mdilPlus} size={1} />
          <span>Add Education</span>
        </button>
      )}
    </div>
  );
};

export default FormEducationList;
