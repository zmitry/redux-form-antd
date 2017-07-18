import moment from "moment";
import {DatePicker} from "antd";
import {customMap} from "./mapError";
import createComponent from "./BaseComponent";

const MonthPicker = DatePicker.MonthPicker;

const datePickerMap = customMap(({input: {onChange, value}, dateFormat}) => {
  if (value === null) {
    value = null;
  } else {
    value = moment(value, dateFormat);
  }
  return {onChange: (e, v) => onChange(v), value, format: dateFormat};
});

// datepicker has some problems with formating this this component doesn't have such problems
const datePickerMapRU = customMap(
  ({input: {onChange, value}, displayFormat, valueFormat}) => {
    if (value === null) {
      value = null;
    } else {
      value = moment(value);
    }
    return {
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
