"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthPickerField = exports.DatePickerField = exports.DatePickerFieldRU = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _antd = require("antd");

var _mapError = require("./mapError");

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthPicker = _antd.DatePicker.MonthPicker;

var datePickerMap = (0, _mapError.customMap)(function (_ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
      value = _ref$input.value,
      dateFormat = _ref.dateFormat;

  if (value !== "") {
    value = (0, _moment2.default)(value, dateFormat);
  }
  return { onChange: function onChange(e, v) {
      return _onChange(v);
    }, value: value, format: dateFormat };
});

// datepicker has some problems with formating this this component doesn't have such problems
var datePickerMapRU = (0, _mapError.customMap)(function (_ref2) {
  var _ref2$input = _ref2.input,
      _onChange2 = _ref2$input.onChange,
      value = _ref2$input.value,
      displayFormat = _ref2.displayFormat,
      valueFormat = _ref2.valueFormat;

  if (value !== "") {
    value = (0, _moment2.default)(value);
  }
  return {
    onChange: function onChange(e, v) {
      _onChange2(e.format(valueFormat));
    },
    value: value,
    format: displayFormat
  };
});

var DatePickerFieldRU = exports.DatePickerFieldRU = (0, _BaseComponent2.default)(_antd.DatePicker, datePickerMapRU);
var DatePickerField = exports.DatePickerField = (0, _BaseComponent2.default)(_antd.DatePicker, datePickerMap);
var MonthPickerField = exports.MonthPickerField = (0, _BaseComponent2.default)(MonthPicker, datePickerMap);