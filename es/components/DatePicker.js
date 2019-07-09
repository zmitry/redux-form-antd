"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthPickerField = exports.DatePickerField = exports.DatePickerFieldRU = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _mapError = require("../maps/mapError");

var _BaseComponent = _interopRequireDefault(require("./BaseComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MonthPicker = _datePicker.default.MonthPicker;

var valueToMoment = function valueToMoment(value, dateFormat) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  return (0, _moment.default)(value, dateFormat);
};

var datePickerMap = (0, _mapError.customMap)(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
      value = _ref$input.value,
      dateFormat = _ref.dateFormat;
  return _objectSpread({}, mapProps, {
    onChange: function onChange(e, v) {
      return _onChange(v);
    },
    value: valueToMoment(value, dateFormat),
    format: dateFormat
  });
}); // datepicker has some problems with formatting, while this component doesn't have such problems

var datePickerMapRU = (0, _mapError.customMap)(function (mapProps, _ref2) {
  var _ref2$input = _ref2.input,
      _onChange2 = _ref2$input.onChange,
      value = _ref2$input.value,
      displayFormat = _ref2.displayFormat,
      valueFormat = _ref2.valueFormat;
  return _objectSpread({}, mapProps, {
    onChange: function onChange(e, v) {
      _onChange2(e.format(valueFormat));
    },
    value: valueToMoment(value),
    format: displayFormat
  });
});
var DatePickerFieldRU = (0, _BaseComponent.default)(_datePicker.default, datePickerMapRU);
exports.DatePickerFieldRU = DatePickerFieldRU;
var DatePickerField = (0, _BaseComponent.default)(_datePicker.default, datePickerMap);
exports.DatePickerField = DatePickerField;
var MonthPickerField = (0, _BaseComponent.default)(MonthPicker, datePickerMap);
exports.MonthPickerField = MonthPickerField;