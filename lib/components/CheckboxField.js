"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require("antd/lib/checkbox");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

var _eventMap = require("../maps/eventMap");

var _eventMap2 = _interopRequireDefault(_eventMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _BaseComponent2.default)(_checkbox2.default, _eventMap2.default);