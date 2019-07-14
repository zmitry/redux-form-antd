import Input from "antd/lib/input";
import Checkbox from "antd/lib/checkbox";
import Switch from "antd/lib/switch";
import Select from "antd/lib/select";
import Radio from "antd/lib/radio";
import InputNumber from "antd/lib/input-number";
import createComponent from "./Base";

const mapCheckbox = ({ input }) => ({ checked: input.value });
const mapPlain = ({ input }) => ({ onChange: input.onChange });

export const SelectField = createComponent(Select, mapPlain);
export const RadioGroupField = createComponent(Radio, mapPlain);
export const InputNumberField = createComponent(InputNumber, mapPlain);
export const SwitchField = createComponent(Switch, mapPlain);

export const CheckboxGroupField = createComponent(Checkbox.Group);
export const CheckboxField = createComponent(Checkbox, mapCheckbox);
export const TextField = createComponent(Input);
export const TextAreField = createComponent(Input.TextArea);
