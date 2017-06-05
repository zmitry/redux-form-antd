import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FormItem from "antd/lib/form/FormItem";

export default function createComponent(AntdComponent, mapProps) {
  class InputComponent extends PureComponent {
    getRenderedComponent() {
      return this.refs.component;
    }

    render() {
      const {
        label,
        labelCol,
        wrapperCol,
        help,
        extra,
        validateStatus,
        hasFeedback = true,
        colon,
        ...rest
      } = mapProps(this.props);

      return (
        <FormItem
          label={label}
          ref="component"
          wrapperCol={wrapperCol}
          labelCol={labelCol}
          help={help}
          hasFeedback={hasFeedback}
          extra={extra}
          validateStatus={validateStatus}
          colon={colon}
        >
          <AntdComponent {...rest} />
        </FormItem>
      );
    }
  }

  return InputComponent;
}
