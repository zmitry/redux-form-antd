"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.RadioField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _select = require("antd/lib/select");

var _select2 = _interopRequireDefault(_select);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Option = _select2.default.Option;
var RadioGroup = _antd.Radio.Group;
var RadioButton = _antd.Radio.Button;

var withOptions = function withOptions(OptionType, getType) {
  return function (Component) {
    return function (_ref) {
      var options = _ref.options,
          props = _objectWithoutProperties(_ref, ["options"]);

      if (getType) {
        OptionType = getType(props);
      }
      return _react2.default.createElement(
        Component,
        props,
        options.map(function (_ref2, key) {
          var label = _ref2.label,
              value = _ref2.value,
              rest = _objectWithoutProperties(_ref2, ["label", "value"]);

          return _react2.default.createElement(
            OptionType,
            _extends({}, rest, { key: key, value: value }),
            label
          );
        })
      );
    };
  };
};

var RadioField = exports.RadioField = withOptions(Option, function (_ref3) {
  var button = _ref3.button;
  return button ? RadioButton : _antd.Radio;
})(RadioGroup);
var SelectField = exports.SelectField = withOptions(Option)(_select2.default);