"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mapError = require("../maps/mapError");

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

var _MultiSelect = require("./MultiSelect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectFieldMap = (0, _mapError.customMap)(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      onChange = _ref$input.onChange,
      value = _ref$input.value,
      multiple = _ref.multiple,
      options = _ref.options,
      placeholder = _ref.placeholder;

  if (!placeholder && options && options.length > 0) {
    value = value ? value : multiple ? [options[0].value] : options[0].value;
  }
  if (placeholder) {
    value = value === "" ? undefined : value;
  }
  return _extends({}, mapProps, { dropdownMatchSelectWidth: true, value: value, style: { minWidth: 200 } });
});

exports.default = (0, _BaseComponent2.default)(_MultiSelect.SelectField, selectFieldMap);