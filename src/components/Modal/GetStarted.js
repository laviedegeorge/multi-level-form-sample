import React from "react";
import { Zap } from "react-feather";

import { Button } from "../Button";
import { Circle } from "../Circle";
import umbrella from "../../assets/umbrella.png";
import { Heading, P } from "../Typography";

const GetStarted = ({ handleClick }) => {
  return (
    <div className={`flex flex-col justify-center items-center px-8`}>
      <div className="flex justify-center items-center">
        <Circle className="h-16 w-16">
          <img src={umbrella} alt="" className="w-8 h-8" />
        </Circle>
      </div>
      <Heading text="So what gives?" />
      <div className="text-_1">
        <div className="flex items-center my-4">
          <Circle.Number>1</Circle.Number>
          <P
            text="Answer a few simple questions about your business"
            className="ml-3"
          />
        </div>
        <div className="flex items-center my-4">
          <Circle.Number>2</Circle.Number>
          <P text="Browse through specially curated quotes" className="ml-3" />
        </div>
        <div className="flex items-center my-4">
          <Circle.Number>3</Circle.Number>
          <P
            text="Select your quote-of-choice and receive your policy instantly"
            className="ml-3"
          />
        </div>
      </div>
      <Button.Primary
        className="w-full md:w-auto"
        onClick={() => {
          console.log("clickd");
          handleClick(100);
        }}
      >
        Get Started
      </Button.Primary>
      <p className="text-_3 flex items-center text-sm my-6">
        <Zap className="text-_3 mr-3" size="15" /> Powered by Blitz
      </p>
    </div>
  );
};

export default GetStarted;
