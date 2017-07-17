import moment from "moment";
import { DatePicker } from "antd";
import { customMap } from "./mapError";
import createComponent from "./BaseComponent";

const MonthPicker = DatePicker.MonthPicker;

const datePickerMap = customMap(({ input: { onChange, value } }) => {
  if (value === "") {
    value = null;
  } else {
    value = moment(value);
  }
  return { onChange: (e, v) => onChange(v), value };
});

export const DatePickerField = createComponent(DatePicker, datePickerMap);
export const MonthPickerField = createComponent(MonthPicker, datePickerMap);
