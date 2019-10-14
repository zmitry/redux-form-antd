import Input from "antd/lib/input";
import createComponent from "./BaseComponent";
import { getValidateStatus } from "../maps/mapError";

// will trigger on change only onBlur
// usefull for performance reasons
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

export default createComponent(
  Input,
  bluredFieldMap
);
