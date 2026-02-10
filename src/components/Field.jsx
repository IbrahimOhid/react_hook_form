import React from "react";

const getChildrenId = (children) => {
  const child = React.Children.only(children);
  if ("id" in child.props) {
    return child.props.id;
  }
};

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildrenId(children);

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2">
          {label}
        </label>
      )}
      {children}
      {error && <div className="text-red-500 mt-1">{error.message}</div>}
    </div>
  );
};

export default Field;
