import { customMap, getValidateStatus } from "./mapError";

// will trigger on change only onBlur
// usefull for performance reasons

export default customMap(({
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
}));
