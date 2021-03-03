import React from "react";

export const Circle = ({ children, className }) => {
  return (
    <div
      className={`${className}  flex-shrink-0 flex justify-center items-center bg-secondary rounded-full text-primary font-bold`}
    >
      {children}
    </div>
  );
};

Circle.Icon = function Icon({ children, className }) {
  return (
    <div
      className={`${className} h-16 w-16  flex-shrink-0 flex justify-center items-center bg-secondary rounded-full text-primary font-bold`}
    >
      {children}
    </div>
  );
};

Circle.Number = function Number({ children, className }) {
  return (
    <div
      className={`${className} h-8 w-8  flex-shrink-0 flex justify-center items-center bg-secondary rounded-full text-primary font-bold`}
    >
      {children}
    </div>
  );
};
