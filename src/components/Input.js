import React from "react";
import { Check } from "react-feather";

export const Input = ({ type, placeholder, className }) => {
  const [value, setValue] = React.useState("");
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className={`${className} bg-transparent border-b border-_1 text-primary focus:outline-none`}
    />
  );
};

Input.Secondary = function Secondary({ type, placeholder, className }) {
  const [value, setValue] = React.useState("");
  return (
    <div
      className={`${className} flex items-center bg-transparent border-b border-_1 py-2`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={`${className} bg-transparent text-primary w-full focus:outline-none`}
      />
      <Check stroke="#27AE60" size="20" />
    </div>
  );
};
