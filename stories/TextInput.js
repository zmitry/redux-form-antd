import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Form, Field } from "react-final-form";
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
  name: "kek2",
  validate: v => (v ? "" : "Required")
};

storiesOf("TextField", module)
  .addDecorator(withKnobs)
  .addDecorator(Center)
  .addDecorator(Locale)
  .add("TextField", () => (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
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
        </form>
      )}
    />
  ))
  .add("TextAreaField", () => (
    <Form
      onSubmit={() => {}}
      render={() => (
        <div style={{ width: 300 }}>
          <Field
            {...commonProps}
            label={text("Label", "Your textareafield label")}
            placeholder={text("Placeholder", "placeholder")}
            component={TextAreaField}
            labelCol={object("labelCol", { span: 24, offset: 0 })}
            wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
            autoSize={object("autosize", { minRows: 2, maxRows: 6 })}
          />
        </div>
      )}
    />
  ))
  .add("Number Field", () => (
    <Form
      onSubmit={() => {}}
      render={() => (
        <div style={{ width: '100%' }}>
          <Field
            {...commonProps}
            component={NumberField}
            label={text("Label", "label")}
            placeholder={text("Placeholder", "placeholder")}
            labelCol={object("labelCol", { span: 24, offset: 0 })}
            wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
          />
        </div>
      )}
    />
  ))
  .add("Slide Field", () => (
    <Form
      onSubmit={() => {}}
      render={() => (
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
      )}
    />
  ))
  .add("Switch Field", () => (
    <Form onSubmit={() => {}}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ width: 300 }}>
            <Field
              name={"kek"}
              label={text("Label", "label")}
              component={SwitchField}
              type={text("type", "text")}
              checkedChildren={text("checkedChildren", "+")}
              unCheckedChildren={text("unCheckedChildren", "??")}
              labelCol={object("labelCol", { span: 24, offset: 0 })}
              wrapperCol={object("wrapperCol", { span: 24, offset: 0 })}
              size={select("size", sizeOptions, "default")}
            />
          </div>
        </form>
      )}
    </Form>
  ))
  .add("Radio Field", () => (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ width: 300 }}>
            <Field
              name={"kek"}
              label={text("Label", "label")}
              component={RadioField}
              options={object("options", options)}
              />
          </div>
        </form>
      )}
    />
  ))
  .add("Select Field", () => (
    <Form
      onSubmit={() => {}}
      render={() => (
        <div style={{ width: 300 }}>
          <Field
            style={{ width: '100%' }}
            name={"kek"}
            label={text("Label", "label")}
            component={SelectField}
            options={object("options", options)}
            mode={select("mode", modes)}
            allowClear={boolean("allowClear", false)}
            notFoundContent={text("notFoundContent", "not found")}
            placeholder={text("placeholder", "nothing selected")}
            tokenSeparators={array("tokenSeparators", [','])}
          />
        </div>
      )}
    />
  ))
  .add("Checkbox Group Field", () => (
    <Form
      onSubmit={() => {}}
      render={() => (
        <div style={{ width: 300 }}>
          <Field
            name={"kek"}
            label={text("Label", "label")}
            component={CheckboxGroupField}
            options={object("options", options)}
          />
        </div>
      )}
    />
  ))
  .add("Picker Field", () => (
    <Form
      onSubmit={() => {}}
      render={() => (
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
      )}
    />
  ));
