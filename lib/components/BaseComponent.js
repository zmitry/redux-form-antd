"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createComponent;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormItem = require("antd/lib/form/FormItem");

var _FormItem2 = _interopRequireDefault(_FormItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createComponent(AntdComponent, mapProps) {
  var InputComponent = function (_PureComponent) {
    _inherits(InputComponent, _PureComponent);

    function InputComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, InputComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).call.apply(_ref, [this].concat(args))), _this), _this.initComponentRef = function (r) {
        _this.componentRef = r;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InputComponent, [{
      key: "getRenderedComponent",
      value: function getRenderedComponent() {
        return this.componentRef;
      }
    }, {
      key: "render",
      value: function render() {
        var _mapProps = mapProps(this.props),
            label = _mapProps.label,
            labelCol = _mapProps.labelCol,
            wrapperCol = _mapProps.wrapperCol,
            help = _mapProps.help,
            extra = _mapProps.extra,
            validateStatus = _mapProps.validateStatus,
            _mapProps$hasFeedback = _mapProps.hasFeedback,
            hasFeedback = _mapProps$hasFeedback === undefined ? true : _mapProps$hasFeedback,
            colon = _mapProps.colon,
            rest = _objectWithoutProperties(_mapProps, ["label", "labelCol", "wrapperCol", "help", "extra", "validateStatus", "hasFeedback", "colon"]);

        return _react2.default.createElement(
          _FormItem2.default,
          {
            label: label,
            ref: this.initComponentRef,
            wrapperCol: wrapperCol,
            labelCol: labelCol,
            help: help,
            hasFeedback: hasFeedback,
            extra: extra,
            validateStatus: validateStatus,
            colon: colon
          },
          _react2.default.createElement(AntdComponent, rest)
        );
      }
    }]);

    return InputComponent;
  }(_react.PureComponent);

  InputComponent.dispayName = "Redux-form-ANTD" + AntdComponent.dispayName;

  return InputComponent;
}