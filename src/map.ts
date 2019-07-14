import { FieldRenderProps } from "react-final-form";
import {
  SyntheticEvent,
  ChangeEvent,
  AllHTMLAttributes,
  ChangeEventHandler
} from "react";

type MapProps = FieldRenderProps<any, any>;
type MetaProps = MapProps["meta"];

export type ValidationStatus = "error" | "warning" | "success";

function hasWarn(meta: MetaProps) {
  return meta.warning || (meta.data && meta.data.warning);
}
export function getValidateStatus(
  meta?: MetaProps
): ValidationStatus | undefined {
  if (!meta) {
    return undefined;
  }
  if (meta.touched) {
    if (meta.error) return "error";
    if (hasWarn(meta)) return "warning";
    if (meta.valid) return "success";
  }
  return undefined;
}

export function getFormItemProps(params: MapProps) {
  const { touched, error } = params.meta;
  const onChange: ChangeEventHandler<any> = v =>
    params.input.onChange(v.target.any);
  return {
    validateStatus: getValidateStatus(params.meta),
    help: touched && (error || hasWarn(params.meta)),
    onChange
  };
}
