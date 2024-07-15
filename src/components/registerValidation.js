import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("username required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email ids required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
});
