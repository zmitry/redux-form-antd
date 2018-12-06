import React, { PureComponent } from "react";
import FormItem from "antd/lib/form/FormItem";

export default function createComponent(AntdComponent, mapProps) {
  class InputComponent extends PureComponent {
    constructor(p) {
      super(p);
      this.initComponentRef.bind(this);
    }
    getRenderedComponent() {
      return this.componentRef;
    }

    initComponentRef(r) {
      this.componentRef = r;
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
        required,
        ...rest
      } = mapProps(this.props);

      return (
        <FormItem
          label={label}
          ref={this.initComponentRef}
          wrapperCol={wrapperCol}
          labelCol={labelCol}
          help={help}
          hasFeedback={hasFeedback}
          extra={extra}
          validateStatus={validateStatus}
          colon={colon}
          required={required}
        >
          <AntdComponent {...rest} />
        </FormItem>
      );
    }
  }
  InputComponent.displayName = `Redux-form-ANTD${AntdComponent.displayName}`;

  return InputComponent;
}
