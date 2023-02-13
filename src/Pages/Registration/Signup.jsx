import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    firstname: Yup.string().required("Required"),
    lastname: Yup.string(),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Invalid phone format")
      .required("Phone is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])/,
        "Password must contain at least one upper-case letter and a number"
      )
      .required("Password is required"),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const initialValues = {
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmpassword: "",
  };

  const onSubmit = (values) => {
    if (
      values.email !== "" &&
      values.password !== "" &&
      values.firstname !== "" &&
      values.phone !== "" &&
      values.password !== "" &&
      values.confirmpassword !== ""
    ) {
      console.log("ss");
      if (values.password === values.confirmpassword) {
        navigate("/");
      }
    }
  };
  return (
    <div>
      <div className="signup-container">
        <h1>Signup</h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="formSignup">
              <label className="labelSignup" htmlFor="email">
                Email
              </label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div className="formSignup">
              <label className="labelSignup" htmlFor="firstname">
                First Name
              </label>
              <Field type="text" id="firstname" name="firstname" />
              <ErrorMessage name="firstname" />
            </div>

            <div className="formSignup">
              <label className="labelSignup" htmlFor="lastname">
                Last Name
              </label>
              <Field type="text" id="lastname" name="lastname" />
              <ErrorMessage name="lastname" />
            </div>

            <div className="formSignup">
              <label className="labelSignup" htmlFor="phone">
                Phone
              </label>
              <Field type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" />
            </div>

            <div className="formSignup">
              <label className="labelSignup" htmlFor="password">
                Password
              </label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" />
            </div>

            <div className="formSignup">
              <label className="labelSignup" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmpassword"
                name="confirmpassword"
              />
              <ErrorMessage name="confirmpassword" />
            </div>

            <div>
              <button className="buttonSignup" type="submit">
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
