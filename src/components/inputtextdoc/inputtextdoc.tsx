import React, { useState } from "react";
import "./index.scss";

interface InputTextDocProps {
  placeholder: string;
  name: string;
  onInputChange: (value: string ,tipo:number) => void;
}

const InputTextDoc: React.FC<InputTextDocProps> = ({
  placeholder,
  name,
  onInputChange,
}) => {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(1);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(parseInt(selectedValue, 10));
   };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
      onInputChange(inputValue , selectedOption);
    }
  };

  return (
    <div>
      <div className="grid-container">
        <div className="column1">
          <select
            className="select-style"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="1">DNI</option>
            <option value="2">RUC</option>
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

export default InputTextDoc;
