import moment from "moment";
import DatePicker from "antd/lib/date-picker";
import {customMap} from "./mapError";
import createComponent from "./BaseComponent";

const MonthPicker = DatePicker.MonthPicker;

const datePickerMap = customMap((mapProps, {input: {onChange, value}, dateFormat}) => {
  if (value !== "") {
    value = moment(value, dateFormat);
  }
  return {
    ...mapProps,
    onChange: (e, v) => onChange(v),
    value,
    format: dateFormat
  };
});

// datepicker has some problems with formatting, while this component doesn't have such problems
const datePickerMapRU = customMap(
  (mapProps, {input: {onChange, value}, displayFormat, valueFormat}) => {
    if (value !== "") {
      value = moment(value);
    }
    return {
      ...mapProps,
      onChange: (e, v) => {
        onChange(e.format(valueFormat));
      },
      value,
      format: displayFormat
    };
  }
);

export const DatePickerFieldRU = createComponent(DatePicker, datePickerMapRU);
export const DatePickerField = createComponent(DatePicker, datePickerMap);
export const MonthPickerField = createComponent(MonthPicker, datePickerMap);
