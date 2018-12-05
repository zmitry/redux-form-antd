"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _mapError = require("../maps/mapError");

var _BaseComponent = _interopRequireDefault(require("./BaseComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckboxGroup = _checkbox.default.Group;
var checkboxGroupMap = (0, _mapError.customMap)(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      onChange = _ref$input.onChange,
      _ref$input$value = _ref$input.value,
      value = _ref$input$value === void 0 ? [] : _ref$input$value;
  value = (0, _mapError.defaultTo)(value, []);
  return _objectSpread({}, mapProps, {
    onChange: onChange,
    value: value
  });
});

var _default = (0, _BaseComponent.default)(CheckboxGroup, checkboxGroupMap);

exports.default = _default;