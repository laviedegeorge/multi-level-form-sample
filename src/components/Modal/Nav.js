import React from "react";
import { ChevronDown, ChevronUp } from "react-feather";

import { Button } from "../Button";

const Nav = ({ handleClick, limit, page }) => {
  return (
    <div
      className={`w-full flex items-center justify-between bg-_4 text-white py-2 px-4 rounded-b-lg absolute bottom-0 left-0 right-0 transition transform`}
    >
      <p className="text-sm">{page}</p>
      <div>
        <Button.Nav
          className={`mr-2 ${limit >= 5 ? "opacity-50" : "opacity-100"}`}
          onClick={() => handleClick("down")}
        >
          <ChevronDown size="15" />
        </Button.Nav>
        <Button.Nav
          className={` ${limit <= 0 ? "opacity-50" : "opacity-100"}`}
          onClick={() => handleClick("up")}
        >
          <ChevronUp size="15" />
        </Button.Nav>
      </div>
    </div>
  );
};

export default Nav;
