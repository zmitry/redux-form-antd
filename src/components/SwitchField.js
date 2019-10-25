import Switch from "antd/lib/switch";
import { customMap } from "../maps/mapError";
import createComponent from "./BaseComponent";

const switchMap = customMap((mapProps, {input: {value}}) => ({
  ...mapProps,
  checked: (/true/i).test(value)
}));

export default createComponent(Switch, switchMap);
