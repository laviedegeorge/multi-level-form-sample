import React from "react";
import {
  Briefcase,
  CloudRain,
  Wifi,
  Package,
  Check,
  Droplet,
  ThumbsDown,
  ThumbsUp,
  Calendar,
} from "react-feather";

import Nav from "./Nav";
import Card from "./Card";
import { Input } from "../Input";
import { Circle } from "../Circle";
import { Button } from "../Button";
import { Heading, P } from "../Typography";

const Form = ({ handleClick }) => {
  const [counter, setCounter] = React.useState(0);
  const [heightArr, setHeightArr] = React.useState([]);

  const parentEl = React.useRef(null);
  const stageOne = React.useRef(null);
  const stageTwo = React.useRef(null);
  const stageThree = React.useRef(null);
  const stageFour = React.useRef(null);
  const stageFive = React.useRef(null);
  const stageSix = React.useRef(null);
  const stageSeven = React.useRef(null);

  React.useEffect(() => {
    const one = stageOne.current.offsetTop;
    const two = stageTwo.current.offsetTop;
    const three = stageThree.current.offsetTop;
    const four = stageFour.current.offsetTop;
    const five = stageFive.current.offsetTop;
    const six = stageSix.current.offsetTop;
    const seven = stageSeven.current.offsetTop;

    const arr = [one, two, three, four, five, six, seven];
    setHeightArr(arr);
    console.log(arr);
  }, [
    stageOne,
    stageTwo,
    stageThree,
    stageFour,
    stageFive,
    stageSix,
    stageSeven,
  ]);

  const switchStage = (dir) => {
    let count = counter;

    if (dir === "up" && counter > 0) {
      count = count - 1;
    }

    if (dir === "down" && count < 6) {
      count = count + 1;
    }

    setCounter(count);
    parentEl.current.scrollTo({ top: heightArr[count], behavior: "smooth" });
    console.log(heightArr[count], count);
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden relative"
        style={{
          height: `460px`,
        }}
        ref={parentEl}
      >
        <div className="px-8">
          {/* ================================= 1 =================================== */}
          <div
            ref={stageOne}
            className={`${counter === 0 ? "opacity-100" : " opacity-20"}`}
          >
            <div className="flex items-center my-6">
              <Circle.Number className="mr-4">1</Circle.Number>
              <Heading text="What type of insurance do you want?" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                header="Professional Liability"
                text="Erros & Omissions (E&O insurance)"
              >
                <Briefcase size="20" />
              </Card>
              <Card
                header="General Liability"
                text="Help mitigate against loss (CGL insurance)"
              >
                <CloudRain size="20" />
              </Card>
              <Card
                header="Business Owner’s Policy"
                text="The complete package (BOP)"
              >
                <Package size="20" />
              </Card>
              <Card header="Cyber" text="Internet-bsed risks (CLIC)">
                <Wifi size="20" />
              </Card>
            </div>
          </div>
          {console.log({
            counter,
            className: counter === 1 ? "opacity-100" : " opacity-20",
          })}
          {/* ========================== 2 ============================= */}
          <div
            className={`my-20  ${
              counter === 1 ? "opacity-100" : " opacity-20"
            }`}
            ref={stageTwo}
          >
            <div className="flex items-center my-6">
              <Circle.Number className="mr-4">2</Circle.Number>
              <Heading text="What’s the name of your business?" />
            </div>
            <div className="flex flex-col">
              <Input type="text" />
              <div>
                <Button.Secondary className=" flex items-center flex-grow-0 mt-6">
                  OK <Check size="18" className="ml-2" />
                </Button.Secondary>
              </div>
            </div>
          </div>
          {/* ============================ 3 ================================ */}
          <div
            ref={stageThree}
            className={`${counter === 2 ? "opacity-100" : " opacity-20"} my-20`}
          >
            <div className="flex items-center my-6">
              <Circle.Number className="mr-4">3</Circle.Number>
              <Heading text="What’s the Address of your business?" />
            </div>
            <div className="flex flex-col">
              <Input type="text" />
              <div>
                <Button.Secondary className=" flex items-center flex-grow-0 mt-6">
                  OK <Check size="18" className="ml-2" />
                </Button.Secondary>
              </div>
            </div>
          </div>
          {/* ============================== 4 ============================== */}
          <div
            ref={stageFour}
            className={`${counter === 3 ? "opacity-100" : " opacity-20"} my-20`}
          >
            <div className="flex items-center my-6">
              <Circle.Number className="mr-4">4</Circle.Number>
              <Heading text="What’s the Phone number of your business?" />
            </div>
            <div className="flex flex-col">
              <Input type="text" />
              <div>
                <Button.Secondary className=" flex items-center flex-grow-0 mt-6">
                  OK <Check size="18" className="ml-2" />
                </Button.Secondary>
              </div>
            </div>
          </div>
          {/* ============================= 5 =============================== */}
          <div
            ref={stageFive}
            className={`${counter === 4 ? "opacity-100" : " opacity-20"} my-20`}
          >
            <div className="flex items-center my-6">
              <Circle.Number className="mr-4">5</Circle.Number>
              <div>
                <Heading
                  text="Do you do your own design?"
                  className="mb-0 mt-0"
                />
                <P
                  text="Does your business provide design services?"
                  className="text-xs"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card header="Yes" text="We do designs in-house">
                <Droplet size="20" />
              </Card>
              <Card header="No" text="We’re gonna need some assistance">
                <CloudRain size="20" />
              </Card>
            </div>
          </div>
          {/* ============================ 6 ================================ */}
          <div
            ref={stageSix}
            className={`${counter === 5 ? "opacity-100" : " opacity-20"} my-20`}
          >
            <div className="flex items-center my-6">
              <Circle.Number className="mr-4">6</Circle.Number>
              <div>
                <Heading
                  text="Do you do your own design?"
                  className="mb-0 mt-0"
                />
                <P
                  text="Does your business provide design services?"
                  className="text-xs"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card header="Yes" text="We do designs in-house">
                <ThumbsUp size="20" />
              </Card>
              <Card header="No" text="We’re gonna need some assistance">
                <ThumbsDown size="20" />
              </Card>
            </div>
          </div>
          {/* ============================= 7 =============================== */}
          <div
            ref={stageSeven}
            className={`${counter === 6 ? "opacity-100" : " opacity-20"} my-20`}
          >
            <div className="flex items-center my-6">
              <Circle.Number className="mr-4">7</Circle.Number>
              <Heading text="When did your business begin?" />
            </div>
            <div className="">
              <div className="w-full md:w-1/2">
                <div className="flex items-end">
                  <Input type="date" className="w-full mr-2" />
                  <Calendar className="text-primary" />
                </div>
                <Button.Primary
                  className="w-full my-4"
                  onClick={() => {
                    console.log("clickd");
                    handleClick(200);
                  }}
                >
                  Get Quotes
                </Button.Primary>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav
        handleClick={switchStage}
        limit={counter}
        page={`${counter + 1} / ${heightArr.length}`}
      />
    </div>
  );
};

export default Form;
