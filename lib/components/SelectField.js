"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapError = require("../maps/mapError");

var _BaseComponent = _interopRequireDefault(require("./BaseComponent"));

var _MultiSelect = require("./MultiSelect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selectFieldMap = (0, _mapError.customMap)(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
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

  return _objectSpread({}, mapProps, {
    onChange: function onChange(value) {
      return value === undefined ? _onChange(null) : _onChange(value);
    },
    dropdownMatchSelectWidth: true,
    value: value,
    style: {
      minWidth: 200
    }
  });
});

var _default = (0, _BaseComponent.default)(_MultiSelect.SelectField, selectFieldMap);

exports.default = _default;