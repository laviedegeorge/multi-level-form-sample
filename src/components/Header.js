import React from "react";

import { Heading, P } from "./Typography";
import { Circle } from "../components/Circle";

export const Header = ({ children, heading, text }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Circle.Icon>{children}</Circle.Icon>
        <Heading text={heading} className="text-center mt-6 mb-0" />
        <P text={text} className="mb-10 text-center md:text-left" />
      </div>
    </div>
  );
};
