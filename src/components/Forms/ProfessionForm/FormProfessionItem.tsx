import React, { ChangeEvent, FC, useState } from "react";
import { IProfession } from "src/app/types";
import FormInput from "../FormInput";
import { useActions } from "src/app/useActions";

interface IProps {
  item: IProfession | null;
  setEditItem: (item: IProfession | null) => void;
}

const FormProfessionItem: FC<IProps> = ({ item, setEditItem }) => {
  const { addProfession, editProfession } = useActions();
  const newItem = item?.id === "";

  const onSaveHandler = () => {
    if (!item) return;
    if (newItem) {
      addProfession({ ...item, id: crypto.randomUUID() });
    } else {
      editProfession(item);
    }
    setEditItem(null);
  };

  const inputs = item && [
    {
      name: "Company Name",
      id: "company",
      type: "text",
      value: item.company,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, company: e.target.value }),
    },
    {
      name: "Position Title",
      id: "position",
      type: "text",
      value: item.position,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, position: e.target.value }),
    },
    {
      name: "Start Date",
      id: "company_start",
      type: "text",
      value: item.start,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, start: e.target.value }),
    },
    {
      name: "End Date",
      id: "company_end",
      type: "text",
      value: item.end,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, end: e.target.value }),
    },
    {
      name: "Location",
      id: "location",
      type: "text",
      value: item.location,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, location: e.target.value }),
    },
    {
      name: "Description",
      id: "description",
      type: "text",
      value: item.description,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setEditItem({ ...item, description: e.target.value }),
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

export default FormProfessionItem;
