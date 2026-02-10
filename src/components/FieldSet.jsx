import React from "react";

const FieldSet = ({ label, children }) => {
  return (
    <div>
      <fieldset className="m-2 border-2 p-4">
        {label && <legend className="px-2">{label}</legend>}
        <div className="flex flex-col gap-4">{children}</div>
      </fieldset>
    </div>
  );
};

export default FieldSet;
