import React from "react";
import { useFormik } from "formik";
import "./register.css";
import { register } from "../slices/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "./registerValidation";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    // initial values of the form
    initialValues: {
      firstName: "",
      Surname: "",
      username: "",
      email: "",
      password: "",
    },

    // handles the validation of the form
    validationSchema: registerSchema,

    // this function will be called when validation is passed and form has been submitted
    onSubmit: (values, { setSubmitting }) => {
      //dispatching the register action with the form values
      dispatch(register(values));
      // navigating to the products page once the form has been submitted
      navigate("/products");

      // this will indicate to formik that the submission has been completed
      setSubmitting(false);
    },

    // Setting values to false to ensure that error messages only show after the register button was clicked
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <div className="register-container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            placeholder="firstName"
          />
          <div className="error">
            {formik.touched.firstName && formik.errors.firstName}
          </div>
        </div>

        <div className="field">
          <input
            id="Surname"
            name="Surname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Surname}
            onBlur={formik.handleBlur}
            placeholder="Surname"
          />
          <div className="error">
            {formik.touched.Surname && formik.errors.Surname}
          </div>
        </div>

        {/* ----------------- firstName field ----------------- */}

        <div className="field">
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            placeholder="username"
          />
          <div className="error">
            {formik.touched.username && formik.errors.username}
          </div>
        </div>

        {/* ----------------- Email field ----------------- */}

        <div className="field">
          <input
            className="register-input"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Email Address"
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
        </div>

        {/* ----------------- Password field ----------------- */}

        <div className="field">
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
          <div className="error">
            {formik.touched.password && formik.errors.password}
          </div>
        </div>
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
