import React from "react";
import { Check } from "react-feather";

export const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`${props.className} bg-transparent border-b border-_1 text-primary focus:outline-none`}
    />
  );
});

Input.Secondary = React.forwardRef(function Seconddary(props, ref) {
  return (
    <div
      className={`${props.className} flex items-center bg-transparent border-b border-_1`}
    >
      <input
        ref={ref}
        {...props}
        className={`${props.className} bg-transparent text-primary w-full focus:outline-none`}
      />
      <Check stroke="#27AE60" size="20" />
    </div>
  );
});
