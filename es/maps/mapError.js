"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.customMap = exports.defaultTo = exports.getValidateStatus = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getValidateStatus = function getValidateStatus(touched, error, warning, valid) {
  if (touched) {
    if (error) return "error";
    if (warning) return "warning";
    if (valid) return "success";
  }

  return undefined;
};

exports.getValidateStatus = getValidateStatus;

var defaultTo = function defaultTo(value, d) {
  if (!value && value !== 0) return d;
  return value;
};

exports.defaultTo = defaultTo;

var mapError = function mapError(_ref) {
  var _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === void 0 ? {} : _ref$meta;

  var touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      valid = _ref$meta.valid,
      inputProps = _extends({}, _ref.input),
      props = _objectWithoutProperties(_ref, ["meta", "input"]);

  return _objectSpread({}, props, {}, inputProps, {
    validateStatus: getValidateStatus(touched, error, warning, valid),
    help: touched && (error || warning)
  });
};

var customMap = function customMap(customPropsFun) {
  return function (props) {
    return [props].reduce(customPropsFun || function (mappedProps) {
      return mappedProps;
    }, mapError(props));
  };
};

exports.customMap = customMap;
var _default = mapError;
exports["default"] = _default;