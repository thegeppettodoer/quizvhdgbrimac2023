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
      <div className="grid-container">
        <div className="column1">
           <select className="select-style">
            <option value="dni">DNI</option>
            <option value="carnet">Carnet Ext</option>
          </select>
        </div>
        <div className="column2">
          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder={placeholder}
              name={name}
              id={name}
              required
              value={value}
              onChange={handleChange}
            />
            <label htmlFor={name} className="form__label">
              {placeholder}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputText;
