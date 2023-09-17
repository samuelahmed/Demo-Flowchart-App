import React from "react";
import { Toolbar } from "./layouts/Toolbar";
import { Flowchart } from "./layouts/Flowchart";

export const App = () => (
  <main className="flex min-h-screen pb-8">
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
