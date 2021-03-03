import React from "react";

export const Heading = ({ text, className }) => {
  return (
    <h3 className={`text-xl font-bold text-_1 my-4 ${className} md:2xl`}>
      {text}
    </h3>
  );
};

export const P = ({ text, className }) => {
  return <p className={` text-_1 ${className}`}>{text}</p>;
};
