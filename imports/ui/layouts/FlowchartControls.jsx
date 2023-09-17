import React from "react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/seperator";

export const FlowchartControls = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <h2 className="text-muted-foreground text-center">Workflows</h2>
      <Separator />
      {/* Create Unit */}
      <p className="text-sm text-muted-foreground">Create Unit</p>
      <div className="flex flex-col md:flex-row justify-left md:space-x-2 space-y-2 md:space-y-0">
        <Button
          variant="outline"
          size="sm"
          className="outline outline-blue-500 w-20"
          onDragStart={(event) => onDragStart(event, "Execution")}
          draggable
        >
          Execution
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="outline outline-green-500 w-20"
          onDragStart={(event) => onDragStart(event, "Condition")}
          draggable
        >
          Condition
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-left md:space-x-2 space-y-2 md:space-y-0">
        <Button
          variant="outline"
          size="sm"
          className="outline outline-yellow-500 w-20"
          onDragStart={(event) => onDragStart(event, "Assignment")}
          draggable
        >
          Assignment
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="outline outline-red-500 w-20"
          onDragStart={(event) => onDragStart(event, "Assertion")}
          draggable
        >
          Assertion
        </Button>
      </div>
      <Separator />
      <div className="md:flex justify-start space-x-2">
        {/* Collapse Units */}
        <p className="text-sm text-muted-foreground">Collpase Units </p>
        <Switch />
        {/* Auto Fit */}
        <p className="text-sm text-muted-foreground">Auto Fit</p>
        <Switch />
      </div>
      <Separator />
    </>
  );
};
