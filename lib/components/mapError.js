"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getValidateStatus = exports.getValidateStatus = function getValidateStatus(touched, error, warning, valid) {
  if (touched) {
    if (error) return "error";
    if (warning) return "warning";
    if (valid) return "success";
  }
  return "";
};

var mapError = function mapError(_ref) {
  var _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === undefined ? {} : _ref$meta;

  var touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      valid = _ref$meta.valid,
      inputProps = _objectWithoutProperties(_ref.input, []),
      props = _objectWithoutProperties(_ref, ["meta", "input"]);

  return _extends({}, props, inputProps, {
    validateStatus: getValidateStatus(touched, error, warning, valid),
    help: touched && (error || warning)
  });
};

var customMap = exports.customMap = function customMap(customPropsFun) {
  return function (props) {
    return [props].reduce(customPropsFun || function (mappedProps) {
      return mappedProps;
    }, mapError(props));
  };
};

exports.default = mapError;