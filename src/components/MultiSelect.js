import React from "react";
import Radio from "antd/lib/radio";
import Select from "antd/lib/select";

const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const withOptions = (OptionType, getType) => Component => {
  class C extends React.PureComponent {
    constructor(p) {
      super(p);
      this.initContainerRef = this.initContainerRef.bind(this);
      this.getContainerRef = this.getContainerRef.bind(this);
    }
    initContainerRef(r) {
      this.container = r;
    }
    getContainerRef() {
      return this.container;
    }
    render() {
      const props = this.props;

      if (getType) {
        OptionType = getType(props);
      }
      const valueKey = props.valueKey;
      const labelKey = props.labelKey;
      const optionsKey = props.optionsKey;
      const options = props[optionsKey] || [];

      // pass options as mapped children, not as options prop
      const propsWithoutOptions = { ...props, [optionsKey]: undefined };

      return (
        <div>
          <div ref={this.initContainerRef} />
          <Component getPopupContainer={this.getContainerRef} {...propsWithoutOptions}>
            {options.map(
              ({ [valueKey]: value, [labelKey]: label, ...rest }, key) => (
                <OptionType {...rest} key={key} value={String(value)}>
                  {label}
                </OptionType>
              )
            )}
          </Component>
        </div>
      );
    }
  }
  C.defaultProps = {
    valueKey: "value",
    labelKey: "label",
    optionsKey: "options"
  };
  return C;
};

export const RadioField = withOptions(null, ({ button }) =>
  button ? RadioButton : Radio
)(RadioGroup);
export const SelectField = withOptions(Option)(Select);
