import Input from "antd/lib/input";
import createComponent from "./BaseComponent";
import lazyTextFieldMap from "../maps/textFieldMap";
import { getValidateStatus } from "../maps/mapError";

const { TextArea } = Input;

export default createComponent(
  TextArea,
  lazyTextFieldMap
);
