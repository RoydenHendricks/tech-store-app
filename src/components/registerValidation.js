import * as Yup from "yup";

//  creating input validations

export const registerSchema = Yup.object({
  //firstName must meet the following requirements
  firstName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("first name required"),
  //surname must meet the following requirements
  Surname: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Surname required"),
  //username must meet the following requirements
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("username required"),
  //email must meet the following requirements
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email required"),
  //password must meet the following requirements
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password required"),
});
