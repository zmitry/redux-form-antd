"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slider = require("antd/lib/slider");

var _slider2 = _interopRequireDefault(_slider);

var _mapError = require("../maps/mapError");

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sliderMap = (0, _mapError.customMap)(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      onAfterChange = _ref$input.onAfterChange,
      onChange = _ref$input.onChange,
      _ref$input$value = _ref$input.value,
      value = _ref$input$value === undefined ? 0 : _ref$input$value,
      range = _ref.range,
      _ref$min = _ref.min,
      min = _ref$min === undefined ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 100 : _ref$max;

  value = (0, _mapError.defaultTo)(value, range ? [min, max] : 0);
  return _extends({}, mapProps, { onAfterChange: onAfterChange ? onAfterChange : onChange, value: value });
});

exports.default = (0, _BaseComponent2.default)(_slider2.default, sliderMap);