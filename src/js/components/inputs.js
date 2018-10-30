import React from "react";

export const TextInput = ({ label }) => (
  <div>
    <label>
      {label}
      <input type="text" />
    </label>
  </div>
);

export const SelectInput = ({ label, options }) => (
  <div>
    <label>
      {label}
      <select>
        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>;
        })}
      </select>
    </label>
  </div>
);

export const YesNoInput = ({ label }) => (
  <div>
    <label>
      {label}:
      Yes <input type="radio" name="question" value="yes" />
      No <input type="radio" name="question" value="no" />
    </label>
  </div>
);
