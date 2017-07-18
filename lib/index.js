"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderField = exports.NumberField = exports.SwitchField = exports.TextField = exports.RadioField = exports.CheckboxField = exports.SelectField = exports.LazyTextField = exports.CheckboxGroupField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _DatePicker = require("./components/DatePicker");

Object.keys(_DatePicker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DatePicker[key];
    }
  });
});

var _antd = require("antd");

var _BaseComponent = require("./components/BaseComponent");

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

var _MultiSelect = require("./components/MultiSelect");

var _mapError = require("./components/mapError");

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckboxGroup = _antd.Checkbox.Group;

var defaultTo = function defaultTo(value, d) {
  if (!value && value !== 0) return d;
  return value;
};

var eventMap = (0, _mapError.customMap)(function (_ref) {
  var _onChange = _ref.input.onChange;
  return {
    onChange: function onChange(v) {
      return _onChange(v.target.value);
    }
  };
});

var checkboxGroupMap = (0, _mapError.customMap)(function (_ref2) {
  var _ref2$input = _ref2.input,
      onChange = _ref2$input.onChange,
      _ref2$input$value = _ref2$input.value,
      value = _ref2$input$value === undefined ? [] : _ref2$input$value;

  value = defaultTo(value, []);
  return { onChange: onChange, value: value };
});

var sliderMap = (0, _mapError.customMap)(function (_ref3) {
  var _ref3$input = _ref3.input,
      onChange = _ref3$input.onChange,
      _ref3$input$value = _ref3$input.value,
      value = _ref3$input$value === undefined ? 0 : _ref3$input$value,
      range = _ref3.range,
      _ref3$min = _ref3.min,
      min = _ref3$min === undefined ? 0 : _ref3$min,
      _ref3$max = _ref3.max,
      max = _ref3$max === undefined ? 100 : _ref3$max;

  value = defaultTo(value, range ? [min, max] : 0);
  return { onAfterChange: onChange, value: value };
});
var textFieldMap = (0, _mapError.customMap)(function (_ref4) {
  var _onChange2 = _ref4.input.onChange;
  return {
    onChange: function onChange(v) {
      return _onChange2(v.nativeEvent.target.value);
    }
  };
});

var selectFieldMap = (0, _mapError.customMap)(function (_ref5) {
  var _ref5$input = _ref5.input,
      onChange = _ref5$input.onChange,
      value = _ref5$input.value,
      multiple = _ref5.multiple,
      options = _ref5.options;

  if (options && options.lenght > 0) {
    value = value ? value : multiple ? [options[0].value] : options[0].value;
  }
  return { dropdownMatchSelectWidth: true, value: value, style: { minWidth: 200 } };
});

var bluredFieldMap = function bluredFieldMap(_ref6) {
  var _ref6$meta = _ref6.meta;
  _ref6$meta = _ref6$meta === undefined ? {} : _ref6$meta;

  var touched = _ref6$meta.touched,
      error = _ref6$meta.error,
      warning = _ref6$meta.warning,
      valid = _ref6$meta.valid,
      _ref6$input = _ref6.input,
      value = _ref6$input.value,
      onChange = _ref6$input.onChange,
      props = _objectWithoutProperties(_ref6, ["meta", "input"]);

  return _extends({}, props, {
    defaultValue: value,
    onBlur: function onBlur(e) {
      onChange(e.nativeEvent.target.value);
    },
    validateStatus: (0, _mapError.getValidateStatus)(touched, error, warning, valid),
    help: touched && (error || warning)
  });
};

var CheckboxGroupField = exports.CheckboxGroupField = (0, _BaseComponent2.default)(CheckboxGroup, checkboxGroupMap);

// will trigger on change only onBlur
// usefull for performance reasons
var LazyTextField = exports.LazyTextField = (0, _BaseComponent2.default)(_antd.Input, bluredFieldMap);
var SelectField = exports.SelectField = (0, _BaseComponent2.default)(_MultiSelect.SelectField, selectFieldMap);
var CheckboxField = exports.CheckboxField = (0, _BaseComponent2.default)(_antd.Checkbox, eventMap);
var RadioField = exports.RadioField = (0, _BaseComponent2.default)(_MultiSelect.RadioField, eventMap);
var TextField = exports.TextField = (0, _BaseComponent2.default)(_antd.Input, textFieldMap);
var SwitchField = exports.SwitchField = (0, _BaseComponent2.default)(_antd.Switch, _mapError2.default);
var NumberField = exports.NumberField = (0, _BaseComponent2.default)(_antd.InputNumber, _mapError2.default);
var SliderField = exports.SliderField = (0, _BaseComponent2.default)(_antd.Slider, sliderMap);