"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = require("antd/lib/input-number");

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _mapError = require("../maps/mapError");

var _mapError2 = _interopRequireDefault(_mapError);

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _BaseComponent2.default)(_inputNumber2.default, _mapError2.default);