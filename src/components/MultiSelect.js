import React from "react";
import { Radio, Select } from "antd";

const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const getEmptyArr = () => {};

const withOptions = (OptionType, getType) => Component =>
  class extends React.PureComponent {
    static defaultProps = {
      valueKey: "value",
      labelKey: "label",
      optionsKey: "options"
    };

    initContainerRef = r => {
      this.container = r;
    };
    getContainerRef = () => {
      return this.container;
    };
    render() {
      const props = this.props;

      if (getType) {
        OptionType = getType(props);
      }
      const valueKey = props.valueKey;
      const labelKey = props.labelKey;
      const optionsKey = props.optionsKey;
      const options = props[optionsKey] || getEmptyArr();

      return (
        <div>
          <div ref={this.initContainerRef} />
          <Component getPopupContainer={this.getContainerRef} {...props}>
            {options.map(({ [valueKey]: value, [labelKey]: label, ...rest }, key) => (
              <OptionType {...rest} key={key} value={String(value)}>
                {label}
              </OptionType>
            ))}
          </Component>
        </div>
      );
    }
  };

export const RadioField = withOptions(null, ({ button }) => (button ? RadioButton : Radio))(RadioGroup);
export const SelectField = withOptions(Option)(Select);
