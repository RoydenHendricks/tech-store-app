import { useFormik } from "formik";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { selectUsers, login } from "../slices/loginSlice";
import { useSelector } from "react-redux";
import { loginSchema } from "./loginValidation";
import { useDispatch } from "react-redux";

const Login = () => {
  // retrieving the list of the users that has registered
  const users = useSelector(selectUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    // initial values of the form
    initialValues: { username: "", password: "" },

    // handles the validation of the form
    validationSchema: loginSchema,

    // this function will be called when validation is passed and form has been submitted
    onSubmit: (values, { setSubmitting }) => {
      // Searching for the user that matches the information that the user entered
      const findUser = users.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (findUser) {
        // if the user is found then the login action will be dispatched with that user info
        dispatch(login(findUser));
        // navigating to the products page once the user has been found and the form has been submitted
        navigate("/products");
      } else {
        // Sending an alert that the user entered the wrong username or password
        alert("Invalid username or password");
      }

      // this will indicate to formik that the submission has been completed
      setSubmitting(false);
    },

    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <input
            id="username"
            name="username"
            type="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            placeholder="username"
          />
          <div className="error">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
        </div>
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
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
