import Checkbox from "antd/lib/checkbox";
import { customMap, defaultTo } from "../maps/mapError";
import createComponent from "./BaseComponent";

const CheckboxGroup = Checkbox.Group;

const checkboxGroupMap = customMap((mapProps, { input: { onChange, value = [] } }) => {
  value = defaultTo(value, []);
  return { ...mapProps, onChange, value };
});

export default createComponent(
  CheckboxGroup,
  checkboxGroupMap
);
