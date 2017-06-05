const getValidateStatus = (touched, error, warning, valid) => {
  if (touched) {
    if (error) return "error";
    if (warning) return "warning";
    if (valid) return "success";
  }
  return "";
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

export const customMap = customPropsFun => props => ({
  ...mapError(props),
  ...customPropsFun(props)
});

export default mapError;
