import React from "react";
import AppGrid from "../commonComponents/AppGrid";
import LeftPanel from "./LeftPanel";

const Container = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftPanel />
      <AppGrid />
    </div>
  );
};

export default Container;
