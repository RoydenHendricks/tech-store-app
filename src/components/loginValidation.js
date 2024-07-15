import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("username required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("password so required"),
});
