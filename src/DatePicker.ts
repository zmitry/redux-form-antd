import moment from "moment";
import DatePicker from "antd/lib/date-picker";
import createComponent from "./Base";

const datePickerMap = ({ input: { onChange, value }, format }) => ({
  onChange: (e, v) => onChange(v),
  value: value ? moment(value, format) : undefined
});

export const DatePickerField = createComponent(DatePicker, datePickerMap);
export const MonthPickerField = createComponent(
  DatePicker.MonthPicker,
  datePickerMap
);
