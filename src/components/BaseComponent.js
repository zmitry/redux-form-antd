import React, { PureComponent } from "react";
import FormItem from "antd/lib/form/FormItem";

export default function createComponent(AntdComponent, mapProps) {
  class InputComponent extends PureComponent {
    getRenderedComponent() {
      return this.componentRef;
    }

    render() {
      const { label, labelCol, wrapperCol, help, extra, validateStatus, hasFeedback = true, colon, ...rest } = mapProps(
        this.props
      );

      return (
        <FormItem
          label={label}
          ref={r => {
            this.componentRef = r;
          }}
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
  InputComponent.dispayName = `Redux-form-ANTD${AntdComponent.dispayName}`;

  return InputComponent;
}
