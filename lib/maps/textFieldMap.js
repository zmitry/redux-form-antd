"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mapError = require("./mapError");

exports.default = (0, _mapError.customMap)(function (mapProps, _ref) {
  var _onChange = _ref.input.onChange;
  return _extends({}, mapProps, {
    onChange: function onChange(v) {
      return _onChange(v.nativeEvent.target.value);
    }
  });
});