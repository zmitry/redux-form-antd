"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _BaseComponent = _interopRequireDefault(require("./BaseComponent"));

var _eventMap = _interopRequireDefault(require("../maps/eventMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _BaseComponent["default"])(_checkbox["default"], _eventMap["default"]);

exports["default"] = _default;