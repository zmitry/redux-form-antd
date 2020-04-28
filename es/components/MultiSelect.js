"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.RadioField = void 0;

var _react = _interopRequireDefault(require("react"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _select = _interopRequireDefault(require("antd/lib/select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Option = _select["default"].Option;
var RadioGroup = _radio["default"].Group;
var RadioButton = _radio["default"].Button;

var withOptions = function withOptions(OptionType, getType) {
  return function (Component) {
    var C = /*#__PURE__*/function (_React$PureComponent) {
      _inherits(C, _React$PureComponent);

      var _super = _createSuper(C);

      function C(p) {
        var _this;

        _classCallCheck(this, C);

        _this = _super.call(this, p);
        _this.initContainerRef = _this.initContainerRef.bind(_assertThisInitialized(_this));
        _this.getContainerRef = _this.getContainerRef.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(C, [{
        key: "initContainerRef",
        value: function initContainerRef(r) {
          this.container = r;
        }
      }, {
        key: "getContainerRef",
        value: function getContainerRef() {
          return this.container;
        }
      }, {
        key: "render",
        value: function render() {
          var props = this.props;

          if (getType) {
            OptionType = getType(props);
          }

          var valueKey = props.valueKey;
          var labelKey = props.labelKey;
          var optionsKey = props.optionsKey;
          var options = props[optionsKey] || []; // pass options as mapped children, not as options prop

          var propsWithoutOptions = _objectSpread({}, props, _defineProperty({}, optionsKey, undefined));

          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
            ref: this.initContainerRef
          }), /*#__PURE__*/_react["default"].createElement(Component, _extends({
            getPopupContainer: this.getContainerRef
          }, propsWithoutOptions), options.map(function (_ref, key) {
            var value = _ref[valueKey],
                label = _ref[labelKey],
                rest = _objectWithoutProperties(_ref, [valueKey, labelKey].map(_toPropertyKey));

            return /*#__PURE__*/_react["default"].createElement(OptionType, _extends({}, rest, {
              key: key,
              value: String(value)
            }), label);
          })));
        }
      }]);

      return C;
    }(_react["default"].PureComponent);

    C.defaultProps = {
      valueKey: "value",
      labelKey: "label",
      optionsKey: "options"
    };
    return C;
  };
};

var RadioField = withOptions(null, function (_ref2) {
  var button = _ref2.button;
  return button ? RadioButton : _radio["default"];
})(RadioGroup);
exports.RadioField = RadioField;
var SelectField = withOptions(Option)(_select["default"]);
exports.SelectField = SelectField;