"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.RadioField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radio = require("antd/lib/radio");

var _radio2 = _interopRequireDefault(_radio);

var _select = require("antd/lib/select");

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var RadioGroup = _radio2.default.Group;
var RadioButton = _radio2.default.Button;

var withOptions = function withOptions(OptionType, getType) {
  return function (Component) {
    var _class, _temp2;

    return _temp2 = _class = function (_React$PureComponent) {
      _inherits(_class, _React$PureComponent);

      function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.initContainerRef = function (r) {
          _this.container = r;
        }, _this.getContainerRef = function () {
          return _this.container;
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var props = this.props;

          if (getType) {
            OptionType = getType(props);
          }
          var valueKey = props.valueKey;
          var labelKey = props.labelKey;
          var optionsKey = props.optionsKey;
          var options = props[optionsKey] || [];

          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("div", { ref: this.initContainerRef }),
            _react2.default.createElement(
              Component,
              _extends({ getPopupContainer: this.getContainerRef }, props),
              options.map(function (_ref2, key) {
                var value = _ref2[valueKey],
                    label = _ref2[labelKey],
                    rest = _objectWithoutProperties(_ref2, [valueKey, labelKey]);

                return _react2.default.createElement(
                  OptionType,
                  _extends({}, rest, { key: key, value: String(value) }),
                  label
                );
              })
            )
          );
        }
      }]);

      return _class;
    }(_react2.default.PureComponent), _class.defaultProps = {
      valueKey: "value",
      labelKey: "label",
      optionsKey: "options"
    }, _temp2;
  };
};

var RadioField = exports.RadioField = withOptions(null, function (_ref3) {
  var button = _ref3.button;
  return button ? RadioButton : _radio2.default;
})(RadioGroup);
var SelectField = exports.SelectField = withOptions(Option)(_select2.default);