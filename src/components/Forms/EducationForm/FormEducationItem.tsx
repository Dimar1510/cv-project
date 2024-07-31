import { ChangeEvent, FC } from "react";
import { IEducation } from "src/app/types";
import FormInput from "../FormInput";
import { useActions } from "src/app/useActions";

interface IProps {
  item: IEducation | null;
  setEditItem: (item: IEducation | null) => void;
}

const FormEducationItem: FC<IProps> = ({ item, setEditItem }) => {
  const { addEducation, editEducation } = useActions();
  const newItem = item?.id === "";

  const onSaveHandler = () => {
    if (!item) return;
    if (newItem) {
      addEducation({ ...item, id: crypto.randomUUID() });
    } else {
      editEducation(item);
    }
    setEditItem(null);
  };

  const inputs = item && [
    {
      name: "School",
      id: "school",
      type: "text",
      value: item.school,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, school: e.target.value }),
    },
    {
      name: "Degree",
      id: "degree",
      type: "text",
      value: item.degree,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, degree: e.target.value }),
    },
    {
      name: "Start Date",
      id: "school_start",
      type: "text",
      value: item.start,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, start: e.target.value }),
    },
    {
      name: "End Date",
      id: "school_end",
      type: "text",
      value: item.end,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, end: e.target.value }),
    },
    {
      name: "Location",
      id: "school_location",
      type: "text",
      value: item.location,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, location: e.target.value }),
    },
  ];

  if (item)
    return (
      <div className={item ? "active form-item" : "form-item"}>
        <ul className="input-list">
          <h4>{!newItem ? "Edit item" : "Add new item"}</h4>
          {inputs?.map((inputItem) => (
            <FormInput {...inputItem} key={inputItem.id} />
          ))}
        </ul>
        <div className="buttons">
          <button className="btn-cancel" onClick={() => setEditItem(null)}>
            Cancel
          </button>
          <button className="btn-save" onClick={onSaveHandler}>
            {!newItem ? "Save" : "Add"}
          </button>
        </div>
      </div>
    );
};

export default FormEducationItem;
