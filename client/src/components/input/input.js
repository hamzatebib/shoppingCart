import React from "react";

function Input(props) {
  const { label, type, name, onChange } = props;
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} required onChange={onChange} />
    </div>
  );
}
export default Input;
