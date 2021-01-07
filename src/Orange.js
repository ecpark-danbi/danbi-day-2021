import React from "react";

export default ({ children }) => (
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "orange", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
    {children}
  </div>
);
