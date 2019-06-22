import moment from "moment";
import DatePicker from "antd/lib/date-picker";
import {customMap} from "../maps/mapError";
import createComponent from "./BaseComponent";

const MonthPicker = DatePicker.MonthPicker;

const valueToMoment = (value, dateFormat) => {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  return moment(value, dateFormat);
};

const datePickerMap = customMap((mapProps, {input: {onChange, value}, dateFormat}) => ({
  ...mapProps,
  onChange: (e, v) => onChange(v),
  value: valueToMoment(value, dateFormat),
  format: dateFormat
}));

// datepicker has some problems with formatting, while this component doesn't have such problems
const datePickerMapRU = customMap(
  (mapProps, {input: {onChange, value}, displayFormat, valueFormat}) => ({
    ...mapProps,
    onChange: (e, v) => {
      onChange(e.format(valueFormat));
    },
    value: valueToMoment(value),
    format: displayFormat
  })
);

export const DatePickerFieldRU = createComponent(DatePicker, datePickerMapRU);
export const DatePickerField = createComponent(DatePicker, datePickerMap);
export const MonthPickerField = createComponent(MonthPicker, datePickerMap);
