"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventMap = require("../maps/eventMap");

var _eventMap2 = _interopRequireDefault(_eventMap);

var _MultiSelect = require("./MultiSelect");

var _BaseComponent = require("./BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _BaseComponent2.default)(_MultiSelect.RadioField, _eventMap2.default);