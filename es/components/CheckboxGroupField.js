"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _checkbox = require("antd/lib/checkbox");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _mapError = require("../maps/mapError");

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = _checkbox2.default.Group;

var checkboxGroupMap = (0, _mapError.customMap)(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      onChange = _ref$input.onChange,
      _ref$input$value = _ref$input.value,
      value = _ref$input$value === undefined ? [] : _ref$input$value;

  value = (0, _mapError.defaultTo)(value, []);
  return _extends({}, mapProps, { onChange: onChange, value: value });
});

exports.default = (0, _BaseComponent2.default)(CheckboxGroup, checkboxGroupMap);