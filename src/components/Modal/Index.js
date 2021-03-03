import React from "react";
import { X } from "react-feather";

//import Nav from "./Nav";
import Form from "./Form";
import Summary from "./Summary";
import Checkout from "./Checkout";
import GetStarted from "./GetStarted";
import PaymentStatus from "./PaymentStatus";

const Modal = () => {
  const parentContainer = React.useRef(null);
  const getStartedContainer = React.useRef(null);
  const formContainer = React.useRef(null);
  const summary = React.useRef(null);

  const [height, setHeight] = React.useState("");
  //const [active, setActive] = React.useState(0);
  const [translate, setTranslate] = React.useState(0);
  //const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setHeight(`${getStartedContainer.current.offsetHeight}px`);
  }, [parentContainer, getStartedContainer]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-700 p-4 absolute top-0 z-10">
      <div
        className=" bg-_5 rounded-lg opacity-100 relative overflow-hidden "
        style={{ maxWidth: "600px", height: height }}
        ref={parentContainer}
      >
        <button className="relative left-0 p-4">
          <X className="text-primary" size="18" />
        </button>
        <div
          className="w-full flex"
          style={{ transform: `translateX(-${translate}%)` }}
        >
          {/* ======================= GET STARTED ============================== */}
          <div
            className={`w-full h-auto bg-_5 flex-shrink-0  `}
            style={{ height: "510px" }}
            ref={getStartedContainer}
          >
            <GetStarted handleClick={setTranslate} />
          </div>
          {/* ================== FORM ======================= */}
          <div className={`w-full bg-_5 flex-shrink-0 `} ref={formContainer}>
            <Form handleClick={setTranslate} />
          </div>
          {/* ================== SUMMARY ======================= */}
          <div
            className={`w-full h-5/6 bg-_5 flex-shrink-0 overflow-y-auto  `}
            ref={summary}
          >
            <Summary handleClick={setTranslate} />
          </div>
          {/* ================== CHECKOUT ======================= */}
          <div
            className={`w-full bg-_5 flex-shrink-0 overflow-y-auto`}
            style={{ height: 460 }}
          >
            <Checkout handleClick={setTranslate} />
          </div>
          {/* ================== Payment success ======================= */}
          <div className={`w-full h-full bg-_5 flex-shrink-0 top-10 left-0`}>
            <PaymentStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
