import React from "react";

export const Button = ({ children, className }) => {
  return <button className={` ${className}`}>{children}</button>;
};

Button.Primary = function Primary({ children, className, ...props }) {
  return (
    <button
      className={`font-semibold bg-_2 text-_1 rounded-lg py-2 px-6 md:px-16 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.Secondary = function Secondary({ children, className, ...props }) {
  return (
    <button
      className={`font-semibold bg-secondary text-primary rounded-lg py-2 px-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.Nav = function Nav({ children, className, ...props }) {
  return (
    <button
      className={`font-semibold bg-white text-_1 py-2 px-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.Ghost = function Ghost({ children, className, ...props }) {
  return (
    <button
      className={`flex items-center font-semibold bg-transparent text-primary py-2 underline ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
