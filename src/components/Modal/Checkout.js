import React from "react";
import { Briefcase, Star, ArrowLeft } from "react-feather";

import { P } from "../Typography";
import { Input } from "../Input";
import { Header } from "../Header";
import pgr from "../../assets/pgr.png";
import { Button } from "../Button";

const Label = ({ label }) => {
  return <label className="font-semibold">{label}</label>;
};

const Checkout = ({ handleClick }) => {
  return (
    <div className="mx-8">
      <div>
        <Button.Ghost
          className="flex items-center"
          onClick={() => {
            handleClick(200);
          }}
        >
          <ArrowLeft size="15" /> Back
        </Button.Ghost>
      </div>
      <Header
        heading="Woah, slow down there cowboy!"
        text="We’re gonna need to see some payment info"
      >
        <Briefcase size="20" />
      </Header>
      <div>
        <Label label="Credit Card Number" />
        <Input.Secondary type="text" className="mb-4" />
        <Label label="Card Holder Name" />
        <Input.Secondary type="text" className="mb-4" />
        <div className="flex mb-4">
          <div className="w-full">
            <Label label="Expiry date" />
            <Input.Secondary type="text" />
          </div>
          <div className="w-full ml-4">
            <Label label="CVV" />
            <Input.Secondary type="text" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <P text="Selected coverage" />
        <div
          className="flex flex-col items-center justify-between text-_1 bg-white border border-primary rounded-lg p-4 mb-6"
          style={{ height: "200px", maxWidth: "250px" }}
        >
          <div className="flex flex-col items-center">
            <img src={pgr} alt="" />
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
              <span className=" text-3xl font-bold">${120}</span>
              <span className="text-sm">/mo</span>
            </p>
            <P text={`$${1440} per year`} className="text-sm" />
          </div>
        </div>
        <Button.Primary
          className="w-full md:w-auto mb-4"
          onClick={() => {
            handleClick(400);
          }}
        >
          Complete purchase
        </Button.Primary>
      </div>
    </div>
  );
};

export default Checkout;
