"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _input = _interopRequireDefault(require("antd/lib/input"));

var _BaseComponent = _interopRequireDefault(require("./BaseComponent"));

var _mapError = require("../maps/mapError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// will trigger on change only onBlur
// usefull for performance reasons
var bluredFieldMap = function bluredFieldMap(_ref) {
  var _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === void 0 ? {} : _ref$meta;

  var touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      valid = _ref$meta.valid,
      _ref$input = _ref.input,
      value = _ref$input.value,
      onChange = _ref$input.onChange,
      props = _objectWithoutProperties(_ref, ["meta", "input"]);

  return _objectSpread({}, props, {
    defaultValue: value,
    onBlur: function onBlur(e) {
      onChange(e.nativeEvent.target.value);
    },
    validateStatus: (0, _mapError.getValidateStatus)(touched, error, warning, valid),
    help: touched && (error || warning)
  });
};

var _default = (0, _BaseComponent.default)(_input.default, bluredFieldMap);

exports.default = _default;