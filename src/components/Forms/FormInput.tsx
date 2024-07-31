import "src/styles/FormInput.css";
import { useActions } from "src/app/useActions";
import { ChangeEvent, FC } from "react";
import { IPersonalDetails } from "src/app/types";

interface IFormInput {
  id: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<IFormInput> = ({
  id,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  const { editDetails } = useActions();
  return (
    <li className="input-field">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={
          onChange
            ? onChange
            : (e) =>
                editDetails({
                  value: e.target.value,
                  field: id as keyof IPersonalDetails,
                })
        }
        placeholder={placeholder}
      />
    </li>
  );
};

export default FormInput;
