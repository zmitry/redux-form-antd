import React from "react";
import { reduxForm } from "redux-form";

export const Form = ({ children }) => children;

export default reduxForm({
  form: "kek"
})(Form);
