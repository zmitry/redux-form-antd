import Slider from "antd/lib/slider";
import { customMap, defaultTo } from "../maps/mapError";
import createComponent from "./BaseComponent";

const sliderMap = customMap(
  (mapProps, { input: { onAfterChange, onChange, value = 0 }, range, min = 0, max = 100 }) => {
    value = defaultTo(value, range ? [min, max] : 0);
    return { ...mapProps, onAfterChange: onAfterChange ? onAfterChange : onChange, value };
  }
);

export default createComponent(Slider, sliderMap);
