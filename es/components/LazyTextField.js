"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _input = require("antd/lib/input");

var _input2 = _interopRequireDefault(_input);

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

var _mapError = require("../maps/mapError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// will trigger on change only onBlur
// usefull for performance reasons
var bluredFieldMap = function bluredFieldMap(_ref) {
  var _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === undefined ? {} : _ref$meta;

  var touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      valid = _ref$meta.valid,
      _ref$input = _ref.input,
      value = _ref$input.value,
      onChange = _ref$input.onChange,
      props = _objectWithoutProperties(_ref, ["meta", "input"]);

  return _extends({}, props, {
    defaultValue: value,
    onBlur: function onBlur(e) {
      onChange(e.nativeEvent.target.value);
    },
    validateStatus: (0, _mapError.getValidateStatus)(touched, error, warning, valid),
    help: touched && (error || warning)
  });
};

exports.default = (0, _BaseComponent2.default)(_input2.default, bluredFieldMap);