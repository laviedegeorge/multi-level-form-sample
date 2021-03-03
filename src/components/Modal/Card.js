import React from "react";
import { P } from "../Typography";

const Card = ({ children, header, text }) => {
  return (
    <div className={` flex items-center shadow bg-white rounded-lg px-2 py-3`}>
      <div className="mr-4 text-primary">{children}</div>
      <div>
        <P text={header} className="text-sm font-semibold" />
        <P text={text} className="text-xs" />
      </div>
    </div>
  );
};

export default Card;
