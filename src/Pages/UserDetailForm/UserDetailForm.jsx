import React from "react";
import { Link, Outlet } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const UserDetailForm = () => {
  const validationSchema = Yup.object({
    country: Yup.string().required("Required"),
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postal: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const initialValues = {
    country: "",
    fname: "",
    lname: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    phone: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="country">Country/Region</label>
          <Field type="text" id="country" name="country" />
          <ErrorMessage name="country" />
        </div>

        <div>
          <label htmlFor="fname">First Name</label>
          <Field type="text" id="fname" name="fname" />
          <ErrorMessage name="fname" />
        </div>

        <div>
          <label htmlFor="lname">Last Name</label>
          <Field type="text" id="lname" name="lname" />
          <ErrorMessage name="lname" />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <Field type="text" id="city" name="city" />
          <ErrorMessage name="city" />
        </div>

        <div>
          <label htmlFor="postal">Postal</label>
          <Field type="text" id="postal" name="postal" />
          <ErrorMessage name="postal" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" />
        </div>

        <button type="submit">Continue to Shopping</button>
      </Form>
      {/* <h1>UserDetailForm</h1>
      <Link to="confirmed-order">Confirm Order</Link>
      <Outlet /> */}
    </Formik>
  );
};

export default UserDetailForm;
