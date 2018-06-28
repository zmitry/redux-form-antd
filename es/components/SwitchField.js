"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _switch = require("antd/lib/switch");

var _switch2 = _interopRequireDefault(_switch);

var _mapError = require("../maps/mapError");

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var switchMap = (0, _mapError.customMap)(function (mapProps, _ref) {
  var value = _ref.input.value;
  return _extends({}, mapProps, {
    checked: value
  });
});

exports.default = (0, _BaseComponent2.default)(_switch2.default, switchMap);