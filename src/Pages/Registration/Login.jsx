import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, redirect, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase";
import { signIn } from "../../utils/Services/firebase";

const Login = () => {
  const redirect = useLocation();
  const location = redirect.state?.redirectedFrom.pathname;

  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(12);
    // if (values.email !== "" && values.password !== "") {
    //   navigate("/home");

    signIn(values, navigate, location);
    // navigate("/home");

    //navigate("/home");
    // } else {
    //   throw new ErrorMessage("Invalid username or password");
    // }
  };

  //fireBae Auhentication

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div>
      <div className="login-container">
        <h1>E-Commerce</h1>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form1">
            <label className="labelLogin" htmlFor="email">
              Email
            </label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>

          <div className="form1">
            <label className="labelLogin" htmlFor="password">
              Password
            </label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <div>
            <button className="buttonLogin" type="">
              Login
            </button>
          </div>
        </Form>
      </Formik>
      <div>
        <Link to="/signup">
          <button className="buttonLogin" type="button">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
