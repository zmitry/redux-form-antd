export const getValidateStatus = (touched, error, warning, valid) => {
  if (touched) {
    if (error) return "error";
    if (warning) return "warning";
    if (valid) return "success";
  }
  return undefined;
};

export const defaultTo = (value, d) => {
  if (!value && value !== 0) return d;
  return value;
};

const mapError = ({
  meta: { touched, error, warning, valid } = {},
  input: { ...inputProps },
  ...props
}) => ({
  ...props,
  ...inputProps,
  validateStatus: getValidateStatus(touched, error, warning, valid),
  help: touched && (error || warning)
});

export const customMap = customPropsFun => props => (
  [props].reduce(customPropsFun || (mappedProps => mappedProps), mapError(props))
);

export default mapError;
