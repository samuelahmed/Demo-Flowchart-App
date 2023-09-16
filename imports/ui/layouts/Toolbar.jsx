import React from "react";
import { NavigationBar } from "./NavigationBar";
import { FlowchartControls } from "./FlowchartControls";

export const Toolbar = () => {
  return (
    <aside className="px-2 py-2 md:py-4 flex flex-col justify-between space-y-2">
      <NavigationBar />
      <FlowchartControls />
    </aside>
  );
};
