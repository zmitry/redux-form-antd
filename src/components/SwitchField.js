import Switch from "antd/lib/switch";
import { customMap } from "../maps/mapError";
import createComponent from "./BaseComponent";

const switchMap = customMap((mapProps, { input: { value, onBlur, onChange } }) => ({
  ...mapProps,
  checked: !!(value === 'true' || value === true),
  // The antd Switch produces those events in the wrong order
  // redux-form expects: focus -> change -> blur
  // By reordering them, we ensure the state updates correctly
  onBlur: () => {},
  onChange: (v) => {
    onChange(v);
    onBlur(v);
  },
}));

export default createComponent(Switch, switchMap);
