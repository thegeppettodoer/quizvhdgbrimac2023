import React, { useState } from "react";
import "./index.scss";

interface InputTextProps {
  placeholder: string;
  name: string;
  onInputChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  name,
  onInputChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
      onInputChange(inputValue);
    }
  };

  return (
    <div>
      <div className="grid-container-inp">
       
        <div className="column2-inp">
          <div className="form__group-inp field">
            <input
              type="text"
              className="form__field-inp"
              placeholder={placeholder}
              name={name}
              id={name}
              required
              value={value}
              onChange={handleChange}
            />
            <label htmlFor={name} className="form__label-inp">
              {placeholder}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputText;
