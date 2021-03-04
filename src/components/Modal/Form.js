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
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Nav from "./Nav";
import Card from "./Card";
import { Input } from "../Input";
import { Circle } from "../Circle";
import { Button } from "../Button";
import { Heading, P, Error } from "../Typography";

const Form = ({ handleClick }) => {
  const { register, unregister, watch, setValue, errors } = useFormContext();
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

  React.useEffect(() => {
    register("insuranceType", { required: true });
    register("design", { required: true });
    register("buildingCoverage", { required: true });
    return () => {
      unregister("insuranceType");
      unregister("design");
      unregister("buildingCoverage");
    };
  }, [register, unregister]);

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
                active={watch("insuranceType") === "professional-liability"}
                onClick={() => {
                  setValue("insuranceType", "professional-liability");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
                <Briefcase size="20" />
              </Card>
              <Card
                header="General Liability"
                text="Help mitigate against loss (CGL insurance)"
                active={watch("insuranceType") === "general-liability"}
                onClick={() => {
                  setValue("insuranceType", "general-liability");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
                <CloudRain size="20" />
              </Card>
              <Card
                header="Business Owner’s Policy"
                text="The complete package (BOP)"
                active={watch("insuranceType") === "business-liability"}
                onClick={() => {
                  setValue("insuranceType", "business-liability");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
                <Package size="20" />
              </Card>
              {console.log(watch("insuranceType"))}
              <Card
                header="Cyber"
                text="Internet-bsed risks (CLIC)"
                active={watch("insuranceType") === "cyber"}
                onClick={() => {
                  setValue("insuranceType", "cyber");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
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
              <Input type="text" name="businessName" ref={register} />
              <ErrorMessage
                errors={errors}
                name="businessName"
                render={({ message }) => <Error text={message} />}
              />
              <div>
                <Button.Secondary
                  className=" flex items-center flex-grow-0 mt-6"
                  onClick={() => switchStage("down")}
                >
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
              <Input type="text" name="address" ref={register} />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => <Error text={message} />}
              />
              <div>
                <Button.Secondary
                  className=" flex items-center flex-grow-0 mt-6"
                  onClick={() => switchStage("down")}
                >
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
              <Input type="text" name="phoneNumber" ref={register} />
              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                render={({ message }) => <Error text={message} />}
              />
              <div>
                <Button.Secondary
                  className=" flex items-center flex-grow-0 mt-6"
                  onClick={() => switchStage("down")}
                >
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
              <Card
                header="Yes"
                text="We do designs in-house"
                active={watch("design") === "yes"}
                onClick={() => {
                  setValue("design", "yes");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
                <Droplet size="20" />
              </Card>
              <Card
                header="No"
                text="We’re gonna need some assistance"
                active={watch("design") === "no"}
                onClick={() => {
                  setValue("design", "no");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
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
                  text="Include building coverage?"
                  className="mb-0 mt-0"
                />
                <P
                  text="Does your business provide design services?"
                  className="text-xs"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                header="Yes"
                text="We do designs in-house"
                active={watch("buildingCoverage") === "yes"}
                onClick={() => {
                  setValue("buildingCoverage", "yes");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
                <ThumbsUp size="20" />
              </Card>
              <Card
                header="No"
                text="We’re gonna need some assistance"
                active={watch("buildingCoverage") === "no"}
                onClick={() => {
                  setValue("buildingCoverage", "no");
                  setTimeout(() => {
                    switchStage("down");
                  }, 500);
                }}
              >
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
                  <Input
                    type="date"
                    className="w-full mr-2"
                    name="businessDOB"
                    ref={register}
                  />
                  <Calendar className="text-primary" />
                </div>
                <ErrorMessage
                  errors={errors}
                  name="businessDOB"
                  render={({ message }) => <Error text={message} />}
                />
                <Button.Primary
                  className="w-full my-4"
                  onClick={() => {
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
