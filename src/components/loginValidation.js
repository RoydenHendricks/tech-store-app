import * as Yup from "yup";

//  creating input validations
export const loginSchema = Yup.object({
  //username must meet the following requirements
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("username required"),
  //password must meet the following requirements
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("password required"),
});
