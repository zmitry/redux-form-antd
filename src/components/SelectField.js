import { customMap } from "../maps/mapError";
import createComponent from "./BaseComponent";
import { SelectField as Select } from "./MultiSelect";

const selectFieldMap = customMap(
  (mapProps, { input: { onChange, value }, multiple, options, placeholder }) => {
    if (!placeholder && (options && options.length > 0)) {
      value = value ? value : multiple ? [options[0].value] : options[0].value;
    }
    if (placeholder) {
      value = value === "" ? undefined : value;
    }
    return {
        ...mapProps,
        onChange: value => value === undefined ? onChange(null) : onChange(value),
        dropdownMatchSelectWidth: true,
        value,
    };
  }
);

export default createComponent(Select, selectFieldMap);
