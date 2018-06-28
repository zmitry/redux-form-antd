"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require("antd/lib/input");

var _input2 = _interopRequireDefault(_input);

var _textFieldMap = require("../maps/textFieldMap");

var _textFieldMap2 = _interopRequireDefault(_textFieldMap);

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _BaseComponent2.default)(_input2.default, _textFieldMap2.default);