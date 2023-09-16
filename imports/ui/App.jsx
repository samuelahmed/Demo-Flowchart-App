import React from "react";
import { Toolbar } from "./layouts/Toolbar";
import { Flowchart } from "./layouts/Flowchart";
import { Button } from "./components/ui/button";

export const App = () => (
  <main className="flex min-h-screen">
    {/* Left Menu */}
    <div className="w-fit">
      <Toolbar />
    </div>
    {/* Main Content */}
    <div className="w-3/4">
      <Flowchart />
    </div>
  </main>
);
