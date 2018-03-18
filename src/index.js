import Checkbox from "antd/lib/checkbox";
import Input from "antd/lib/input";
import Slider from "antd/lib/slider";
import InputNumber from "antd/lib/input-number";
import Switch from "antd/lib/switch";
import createComponent from "./components/BaseComponent";

import {
  RadioField as Radio,
  SelectField as Select
} from "./components/MultiSelect";
import mapError, { customMap, getValidateStatus} from "./components/mapError";

const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

const defaultTo = (value, d) => {
  if (!value && value !== 0) return d;
  return value;
};

const eventMap = customMap((mapProps, { input: { onChange } }) => ({
  ...mapProps,
  onChange: v => onChange(v.target.value)
}));

const checkboxGroupMap = customMap((mapProps, { input: { onChange, value = [] } }) => {
  value = defaultTo(value, []);
  return { ...mapProps, onChange, value };
});

const sliderMap = customMap(
  (mapProps, { input: { onChange, value = 0 }, range, min = 0, max = 100 }) => {
    value = defaultTo(value, range ? [min, max] : 0);
    return { ...mapProps, onAfterChange: onChange, value };
  }
);
const textFieldMap = customMap((mapProps, { input: { onChange } }) => ({
  ...mapProps,
  onChange: v => onChange(v.nativeEvent.target.value)
}));

const selectFieldMap = customMap(
  (mapProps, { input: { onChange, value }, multiple, options, placeholder }) => {
    if (!placeholder && (options && options.length > 0)) {
      value = value ? value : multiple ? [options[0].value] : options[0].value;
    }
    if (placeholder) {
      value = value === "" ? undefined : value;
    }
    return { ...mapProps, dropdownMatchSelectWidth: true, value, style: { minWidth: 200 } };
  }
);

const bluredFieldMap = ({
    meta: {touched, error, warning, valid} = {},
    input: {value, onChange},
    ...props
  }) => ({
    ...props,
    defaultValue: value,
    onBlur: e => {
      onChange(e.nativeEvent.target.value);
    },
    validateStatus: getValidateStatus(touched, error, warning, valid),
    help: touched && (error || warning)
  });

const switchMap = customMap((mapProps, {input: {value}}) => ({
  ...mapProps,
  checked: value
}));

export const CheckboxGroupField = createComponent(
  CheckboxGroup,
  checkboxGroupMap
);

// will trigger on change only onBlur
// usefull for performance reasons
export const LazyTextField = createComponent(
  Input,
  bluredFieldMap
);
export const SelectField = createComponent(Select, selectFieldMap);
export const CheckboxField = createComponent(Checkbox, eventMap);
export const RadioField = createComponent(Radio, eventMap);
export const TextField = createComponent(Input, textFieldMap);
export const TextAreaField = createComponent(TextArea, textFieldMap);
export const SwitchField = createComponent(Switch, switchMap);
export const NumberField = createComponent(InputNumber, mapError);
export const SliderField = createComponent(Slider, sliderMap);
export * from "./components/DatePicker";

export { createComponent, customMap };
