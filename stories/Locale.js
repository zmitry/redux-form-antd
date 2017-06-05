import React from "react";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
export default story => (
  <LocaleProvider locale={enUS}>
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      {story()}
    </div>
  </LocaleProvider>
);
