import React from "react";
import { Wind, Star, ArrowLeft } from "react-feather";

import { Header } from "../Header";
import { P } from "../Typography";
import { Button } from "../Button";
import pgr from "../../assets/pgr.png";
import geico from "../../assets/geico.png";
import statefarm from "../../assets/statefarm.png";

const Card = ({ logo, pricePerMon, pricePerYr, handleClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-between text-_1 bg-white border border-gray-400 rounded-lg p-4"
      style={{ height: "300px", maxWidth: "250px" }}
    >
      <div className="flex flex-col items-center">
        <img src={logo} alt="" />
        <div className="flex mt-2">
          <Star size="15" fill="#0074D9" stroke="#0074D9" />
          <Star size="15" fill="#0074D9" stroke="#0074D9" />
          <Star size="15" fill="#0074D9" stroke="#0074D9" />
          <Star size="15" fill="#0074D9" stroke="#0074D9" />
          <Star size="15" fill="#0074D9" stroke="#0074D9" />
        </div>
      </div>
      <div>
        <p className="flex items-end">
          <span className=" text-3xl font-bold">${pricePerMon}</span>
          <span className="text-sm">/mo</span>
        </p>
        <P text={`$${pricePerYr} per year`} className="text-sm" />
      </div>
      <Button.Primary
        onClick={() => {
          handleClick(300);
        }}
      >
        BUY NOW
      </Button.Primary>
    </div>
  );
};

const Summary = ({ handleClick }) => {
  return (
    <div className="mx-8" style={{ height: 460 }}>
      <div>
        <Button.Ghost
          className="flex items-center"
          onClick={() => {
            handleClick(100);
          }}
        >
          <ArrowLeft size="15" /> Back
        </Button.Ghost>
      </div>
      <Header
        heading="Fast like a wind!"
        text="We dove deep through the internet to get you these great quotes"
      >
        <Wind size="20" />
      </Header>
      {/* <div className="flex flex-col items-center ">
        <Circle.Icon>
          <Wind />
        </Circle.Icon>
        <Heading text="Fast like a wind!" className="mb-0" />
        <P text="We dove deep through the internet to get you these great quotes" />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 my-6">
        <Card
          logo={pgr}
          pricePerMon={120}
          pricePerYr={1440}
          handleClick={handleClick}
        />
        <Card
          logo={geico}
          pricePerMon={125}
          pricePerYr={1500}
          handleClick={handleClick}
        />
        <Card
          logo={statefarm}
          pricePerMon={125}
          pricePerYr={1500}
          handleClick={handleClick}
        />
      </div>
      <div className=" text-_1 text-sm mb-4">
        <P text="Summary:" className="font-semibold text-base" />
        <p className="my-2">
          <span className="text-primary underline">Hoop Heaven</span>,
          established on{" "}
          <span className="text-primary underline">Dec 12 2012</span>, and
          operating out of <span>Texas</span>, is interested in purchasing{" "}
          <span className="text-primary underline">cyber insurance</span>.
        </p>
        <p className="my-2">
          Hoop Heaven would also like{" "}
          <span className="text-primary underline">
            building coverage included
          </span>{" "}
          in their policy.
        </p>
        <p className="my-2">
          Hoop Heaven does their own{" "}
          <span className="text-primary underline">designs in-house</span>.
        </p>
        <p className="my-2">
          Hoop Heaven can be reached at{" "}
          <span className="text-primary underline">231-676-4324.</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
