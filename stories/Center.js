import React from "react";
export default story => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
    {story()}
  </div>
);
