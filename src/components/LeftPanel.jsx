import React from "react";
import AppTabs from "../commonComponents/AppTabs";
import AppForm from "../commonComponents/AppForm";
import AppButtonsPanel from "../commonComponents/AppButtonsPanel";

const LeftPanel = () => {
  return (
    <>
      <AppTabs />
      <AppForm />
      <AppButtonsPanel />
    </>
  );
};

export default LeftPanel;
