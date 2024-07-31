import { mdilDelete, mdilPlus } from "@mdi/light-js";
import Icon from "@mdi/react";
import { mdiAccountCogOutline } from "@mdi/js";
import { useAppSelector } from "../../../app/hooks";
import { useActions } from "../../../app/useActions";
import { selectSkills } from "../../../app/personal.slice";

const FormSkills = () => {
  const skills = useAppSelector(selectSkills);
  const { addSkill, editSkill, removeSkill } = useActions();
  return (
    <div className="form-section skills">
      <h2>
        <Icon path={mdiAccountCogOutline} size={1} />
        Key Skills
      </h2>
      {skills.map((skill, index) => {
        return (
          <li className="input-field" key={index}>
            <input
              type="text"
              placeholder="Language or Technology"
              id={`skill-${index}`}
              value={skill}
              onChange={(e) => {
                const value = e.target.value;
                editSkill({ value, index });
              }}
            />
            <button
              className="btn-delete"
              onClick={() => {
                removeSkill(index);
              }}
            >
              <Icon path={mdilDelete} size={1} />
            </button>
          </li>
        );
      })}

      <button
        className="btn-add"
        onClick={() => {
          addSkill();
        }}
      >
        <Icon path={mdilPlus} size={1} />
        <span>Add Skill</span>
      </button>
    </div>
  );
};

export default FormSkills;
