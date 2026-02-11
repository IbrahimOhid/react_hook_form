import React from "react";

const NumberInput = ({ value, onchange, ...rest }) => {
  const handleChange = (e) => {
    const value = e.target.valueAsNumber || 0;
    onchange(value);
  };
  return (
    <input
      type="number"
      min={0}
      onchange={handleChange}
      value={value}
      {...rest}
    />
  );
};

export default NumberInput;
