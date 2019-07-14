import React, { ComponentClass, FunctionComponent, forwardRef } from "react";
import FormItem, { FormItemProps } from "antd/lib/form/FormItem";
import { FieldRenderProps } from "react-final-form";

import { getFormItemProps } from "./map";

type BaseProps = FieldRenderProps<any, any> & {
  formItemProps: FormItemProps;
};

export default function createComponent(
  AntdComponent: ComponentClass<any> | FunctionComponent<any>,
  mapProps: (p: BaseProps) => any = () => ({})
) {
  const Base = forwardRef<FormItem, BaseProps>((props, ref) => {
    const { input, meta, formItemProps, ...rest } = props;
    const { validateStatus, help, onChange } = getFormItemProps({
      input,
      meta
    });
    const additionalProps = mapProps(props);

    return (
      <FormItem {...formItemProps} validateStatus={validateStatus} help={help}>
        <AntdComponent
          ref={ref}
          {...rest}
          onChange={onChange}
          {...additionalProps}
        />
      </FormItem>
    );
  });
  Base.displayName = `Form-${AntdComponent.displayName}`;

  return Base;
}
