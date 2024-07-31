import "src/styles/FormInput.scss";
import { useActions } from "src/app/useActions";
import { ChangeEvent, FC, useEffect, useRef } from "react";
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
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const input = ref.current;
    if (input?.id === "school" || input?.id === "company") {
      input.focus();
    }
  }, []);
  return (
    <li className="input-field">
      <label htmlFor={id}>{name}</label>
      <input
        maxLength={32}
        ref={ref}
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
