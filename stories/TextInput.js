import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Field } from "redux-form";
import {
  withKnobs,
  text,
  boolean,
  select,
  array,
  number,
  object
} from "@storybook/addon-knobs";
import Center from "./Center";
import Redux from "./Redux";
import ReduxForm from "./ReduxForm";
import Locale from "./Locale";

import {
  TextField,
  TextAreaField,
  NumberField,
  SliderField,
  SwitchField,
  CheckboxGroupField,
  RadioField,
  SelectField
} from "../src/index";
import {
  DatePickerField,
  TimePickerField,
  MonthPickerField
} from "../src/components/DatePicker";

const sizeOptions = {
  large: "large",
  default: "default",
  small: "small"
};

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];
const modes = ["default", "combobox", "multiple", "tags"];

const commonProps = {
  name: "kek2",
  warn: v => (v && v.length > 2 ? "" : "too short"),
  validate: v => (v ? "" : "Required")
};

storiesOf("TextField", module)
  .addDecorator(Redux)
  .addDecorator(withKnobs)
  .addDecorator(Center)
  .addDecorator(Locale)
  .add("TextField", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          {...commonProps}
          label={text("Label", "Your textfield label")}
          placeholder={text("Placeholder", "placeholder")}
          component={TextField}
          type={text("type", "text")}
          size={select("size", sizeOptions, "default")}
          labelCol={object("labelCol", { span: 24, offset: 0 })}
          wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
          addonBefore={text("addonBefore", "")}
          addonAfter={text("addonAfter", "")}
          prefix={text("prefix", "")}
          suffix={text("suffix", "")}
          autosize={object("autosize", { minRows: 2, maxRows: 6 })}
          colon={boolean("colon", true)}
          required
        />
      </div>
    </ReduxForm>
  ))
  .add("TextAreaField", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          {...commonProps}
          label={text("Label", "Your textareafield label")}
          placeholder={text("Placeholder", "placeholder")}
          component={TextAreaField}
          labelCol={object("labelCol", { span: 24, offset: 0 })}
          wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
          autosize={object("autosize", { minRows: 2, maxRows: 6 })}
        />
      </div>
    </ReduxForm>
  ))
  .add("Number Field", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          {...commonProps}
          component={NumberField}
          label={text("Label", "label")}
          placeholder={text("Placeholder", "placeholder")}
          labelCol={object("labelCol", { span: 24, offset: 0 })}
          wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
        />
      </div>
    </ReduxForm>
  ))
  .add("Slide Field", () => (
    <ReduxForm>
      <div style={{ height: 300, width: 300 }}>
        <Field
          {...commonProps}
          component={SliderField}
          range={boolean("range", true)}
          min={number("min", 0)}
          max={number("max", 100)}
          step={number("step", 1)}
          dots={boolean("dots", false)}
          vertical={boolean("vertical", false)}
          label={text("Label", "label")}
          labelCol={object("labelCol", { span: 24, offset: 0 })}
          wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
        />
      </div>
    </ReduxForm>
  ))
  .add("Switch Field", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          name={"kek"}
          label={text("Label", "label")}
          component={SwitchField}
          type={text("type", "text")}
          checkedChildren={text("checkedChildren", "+")}
          uncheckedChildren={text("uncheckedChildren", "??")}
          labelCol={object("labelCol", { span: 24, offset: 0 })}
          wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
          size={select("size", sizeOptions, "default")}
        />
      </div>
    </ReduxForm>
  ))
  .add("Radio Field", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          name={"kek"}
          label={text("Label", "label")}
          component={RadioField}
          options={object("options", options)}
        />
      </div>
    </ReduxForm>
  ))
  .add("Select Field", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          name={"kek"}
          label={text("Label", "label")}
          component={SelectField}
          options={object("options", options)}
          mode={select("mode", modes)}
          allowClear={boolean("allowClear", false)}
          notFoundContent={text("notFoundContent", "not found")}
          placeholder={text("placeholder", "nothing selected")}
          tokenSeparators={text("tokenSeparators", ",")}
        />
      </div>
    </ReduxForm>
  ))
  .add("Checkbox Group Field", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          name={"kek"}
          label={text("Label", "label")}
          component={CheckboxGroupField}
          options={object("options", options)}
        />
      </div>
    </ReduxForm>
  ))
  .add("Picker Field", () => (
    <ReduxForm>
      <div style={{ width: 300 }}>
        <Field
          name={"kek"}
          label={text("Label", "label")}
          locale={"en"}
          placeholder={text("placeholder", "pl")}
          component={DatePickerField}
          size={select("size", sizeOptions)}
        />
        <br />
        <Field
          name={"kek2"}
          label={text("Label", "label")}
          placeholder={text("placeholder", "pl")}
          component={MonthPickerField}
          size={select("size", sizeOptions)}
        />
      </div>
    </ReduxForm>
  ));
