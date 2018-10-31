import React from "react";

export const TextInput = ({ label }) => (
  <div>
    <label>{label}</label>
    <input type="text" />
  </div>
);

export const SelectInput = ({ label, options }) => (
  <div>
    <label>{label}</label>
    <select>
      {options.map((option, index) => {
        return <option key={index} value={option.value}>{option.label}</option>;
      })}
    </select>
  </div>
);

export const YesNoInput = ({ label }) => (
  <div>
    <p>{label}</p>
    <label><input type="radio" name="question" value="yes" /> Yes</label>
    <label><input type="radio" name="question" value="no" /> No</label>
  </div>
);
