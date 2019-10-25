import React from "react";
import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";
export default story => (
  <ConfigProvider locale={enUS}>
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      {story()}
    </div>
  </ConfigProvider>
);
