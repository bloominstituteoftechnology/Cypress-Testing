import React, { useState } from "react";
import { withFormik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const FormContainer = ({ props, values, errors, touched, isSubmitting }) => {
  return (
    <Form className="form">
      <ErrorMessage name="name" />
      <Field
        data-cy="name"
        className="field"
        type="text"
        name="name"
        placeholder="name" />
      <ErrorMessage name="email" />
      <Field
        data-cy="email"
        className="field"
        type="email"
        name="email"
        placeholder="email" />
      <ErrorMessage name="password" />
      <Field
        data-cy="password"
        className="field"
        type="password"
        name="password"
        placeholder="password"
      />
      <label>
        <ErrorMessage name="tos" />
        <Field
          data-cy="tos"
          className="field"
          id="checkbox"
          type="checkbox"
          name="tos" />
        Accept Terms of Service
      </label>
      <button data-cy="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(12, "Password must be 12 characters or longer")
      .required("Password is required"),
    tos: Yup.bool()
      .test(
        'tos',
        'You must agree with our Terms of Services',
        value => value === true
      )
      .required("You must agree with our Terms of Services")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        if (values.email === "waffle@syrup.com") {
          console.log("Email already taken");
          setErrors({ email: "Email already taken!" });
        } else {
          console.log(res);
          props.setUser([...props.user, res]);
        }
      })
      .catch(err => {
        console.log(err);
      });
    resetForm()
  }
})(FormContainer);

export default FormikLoginForm;
