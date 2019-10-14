import { customMap } from "./mapError";

export default customMap((mapProps, { input: { onChange } }) => ({
  ...mapProps,
  onChange: v => onChange(v.nativeEvent.target.value)
}));
