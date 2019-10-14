"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventMap = _interopRequireDefault(require("../maps/eventMap"));

var _MultiSelect = require("./MultiSelect");

var _BaseComponent = _interopRequireDefault(require("./BaseComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _BaseComponent["default"])(_MultiSelect.RadioField, _eventMap["default"]);

exports["default"] = _default;