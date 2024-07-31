import React, { useState } from "react";
import FormInput from "../FormInput";
import { mdilChevronRight, mdilPlus } from "@mdi/light-js";
import { mdiAccountOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useActions } from "src/app/useActions";
import { selectLinks, selectPersonalDetails } from "src/app/personal.slice";
import { useAppSelector } from "src/app/hooks";

const FormPersonal = () => {
  const { name, about, address, email, phone, specialty } = useAppSelector(
    selectPersonalDetails
  );

  const [active, setActive] = useState(false);
  const { addLink, editLink, removeLink } = useActions();
  const links = useAppSelector(selectLinks);
  const { editDetails } = useActions();

  const inputs = [
    {
      name: "Full Name",
      id: "name",
      type: "text",
      placeholder: "Enter your full name",
      value: name,
    },
    {
      name: "Specialty",
      id: "specialty",
      type: "text",
      placeholder: "Enter your specialty",
      value: specialty,
    },
    {
      name: "Location",
      id: "address",
      type: "text",
      placeholder: "City, country/region",
      value: address,
    },
    {
      name: "E-mail",
      id: "email",
      type: "email",
      placeholder: "Enter your e-mail",
      value: email,
    },
    {
      name: "Phone Number",
      id: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
      value: phone,
    },
  ];

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="form-section form-personal">
      <button className="btn-personal" onClick={handleToggle}>
        <h2>
          <span>
            <Icon path={mdiAccountOutline} size={1} />
            Personal Details{" "}
          </span>
          <Icon path={mdilChevronRight} size={1} />
        </h2>
      </button>
      {active && (
        <ul className="input-list active">
          {inputs.map((item) => {
            return <FormInput {...item} key={item.id} />;
          })}
          <li className="input-field">
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              placeholder="Tell a little about yourself"
              value={about}
              onChange={(e) =>
                editDetails({ value: e.target.value, field: "about" })
              }
            />
          </li>
          {links.map((link, index) => (
            <li className="input-field" key={index}>
              <label htmlFor={`link-${index}`}>Link {index + 1}</label>
              <input
                type="text"
                placeholder="Additional link you might want to add"
                id={`link-${index}`}
                value={link}
                onChange={(e) => {
                  const value = e.target.value;
                  editLink({ value, index });
                }}
              />
              <button
                className="btn-delete"
                onClick={() => {
                  removeLink(index);
                }}
              >
                Remove link
              </button>
            </li>
          ))}
          <button
            className="btn-add"
            onClick={() => {
              addLink();
            }}
          >
            <Icon path={mdilPlus} size={1} />
            <span>Add Link</span>
          </button>
        </ul>
      )}
    </div>
  );
};

export default FormPersonal;
