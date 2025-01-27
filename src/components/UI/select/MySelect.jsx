import { useState } from "react";

const MySelect = function ({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        name=""
        id=""
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
