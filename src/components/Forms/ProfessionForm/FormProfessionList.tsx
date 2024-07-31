import { useState } from "react";
import FormProfessionItem from "./FormProfessionItem";
import { mdilDelete, mdilPlus } from "@mdi/light-js";
import { mdiSchoolOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useAppSelector } from "src/app/hooks";
import { selectProfession } from "src/app/profession.slice";
import { IProfession } from "src/app/types";
import { useActions } from "src/app/useActions";

const initialProfession: IProfession = {
  id: "",
  company: "",
  position: "",
  start: "",
  end: "",
  location: "",
  description: "",
};

const FormProfessionList = () => {
  const educations = useAppSelector(selectProfession);
  const [editItem, setEditItem] = useState<null | IProfession>(null);
  const { deleteProfession } = useActions();

  return (
    <div className="form-section">
      <h2>
        <Icon path={mdiSchoolOutline} size={1} />
        Experience
      </h2>
      {educations.map((item) => (
        <div
          className="form-item-header"
          onClick={() => setEditItem(item)}
          key={item.id}
        >
          <h3>{item.company}</h3>
          <button
            className="btn-delete"
            onClick={(e) => {
              e.stopPropagation();
              deleteProfession(item.id);
            }}
          >
            <Icon path={mdilDelete} size={1} />
          </button>
        </div>
      ))}
      <FormProfessionItem item={editItem} setEditItem={setEditItem} />
      {!editItem && (
        <button
          className="btn-add"
          onClick={() => setEditItem(initialProfession)}
        >
          <Icon path={mdilPlus} size={1} />
          <span>Add Experience</span>
        </button>
      )}
    </div>
  );
};

export default FormProfessionList;
