import * as yup from "yup";

export const schema = yup.object().shape({
  businessName: yup.string().min(4, "Please input a vailded name").required(),
  address: yup.string().min(10, "address too short").required(),
  phoneNumber: yup
    .number("invalid phone number")
    .min(6, "number too short")
    .max(11, "number too long")
    .required(),
  businessDOB: yup.date().required("please input a date"),
});
