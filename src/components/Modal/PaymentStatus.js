import React from "react";
import { Check, ArrowLeft } from "react-feather";
import { Button } from "../Button";
import { Circle } from "../Circle";
import { Heading, P } from "../Typography";

const PaymentStatus = () => {
  return (
    <div className=" flex flex-col items-center mx-8">
      <div className="flex flex-col items-center">
        <Circle.Icon>
          <Check size="25" stroke="#0074D9" />
        </Circle.Icon>
        <Heading text="That worked!" className="mt-6 mb-0" />
        <P
          text="Your payment was successful, and your policy documents are on their way to their new home - your inbox!"
          className="mb-10 text-center md:text-left"
        />
      </div>
      <Button.Primary className="text-sm md:text-base">
        DOWNLOAD POLICY DOCS
      </Button.Primary>
      <Button.Ghost>
        <ArrowLeft size="15" stroke="#0074D9" className="mr-2" />
        Go back to my portal
      </Button.Ghost>
    </div>
  );
};

export default PaymentStatus;
