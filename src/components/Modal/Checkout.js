import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { Briefcase, Star, ArrowLeft } from "react-feather";

import { P, Error } from "../Typography";
import { Input } from "../Input";
import { Header } from "../Header";
import { Button } from "../Button";
import pgr from "../../assets/pgr.png";

const schema = yup.object().shape({
  cardNumber: yup.string().length(16, "length should be 16 numbers").required(),
  CardHolderName: yup.string().min(4, "name is too short").required(),
  expireDate: yup
    .string()
    .length(5, "length should be 5 characters")
    .required(),
  cvv: yup.string().length(3, "length should be 3 numbers").required(),
});

const Label = ({ label }) => {
  return <label className="font-semibold mb-2">{label}</label>;
};

const Checkout = ({ handleClick }) => {
  const { register, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

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
        <div className="my-6">
          <Label label="Credit Card Number" />
          <Input.Secondary type="number" name="cardNumber" ref={register} />
          <ErrorMessage
            errors={errors}
            name="cardNumber"
            render={({ message }) => <Error text={message} />}
          />
        </div>
        <div className="my-6">
          <Label label="Card Holder Name" />
          <Input.Secondary type="text" name="CardHolderName" ref={register} />
          <ErrorMessage
            errors={errors}
            name="CardHolderName"
            render={({ message }) => <Error text={message} />}
          />
        </div>
        <div className="flex mb-4">
          <div className="w-full">
            <Label label="Expiry date" />
            <Input.Secondary type="text" name="expireDate" ref={register} />
            <ErrorMessage
              errors={errors}
              name="expireDate"
              render={({ message }) => <Error text={message} />}
            />
          </div>
          <div className="w-full ml-4">
            <Label label="CVV" />
            <Input.Secondary type="number" name="cvv" ref={register} />
            <ErrorMessage
              errors={errors}
              name="cvv"
              render={({ message }) => <Error text={message} />}
            />
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
      {console.log("errors", errors)}
    </div>
  );
};

export default Checkout;
