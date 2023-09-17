import React from "react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/seperator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
                variant="outline"
                size="sm"
                className="outline outline-blue-400 w-28"
                onDragStart={(event) => onDragStart(event, "executionNode")}
                draggable
              >
                Execution
            </TooltipTrigger>
            <TooltipContent>
              <p>Drag into dotted area to create Execution Unit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
                variant="outline"
                size="sm"
                className="outline outline-green-400 w-28"
                onDragStart={(event) => onDragStart(event, "conditionNode")}
                draggable
              >
                Condition
            </TooltipTrigger>
            <TooltipContent>
              <p>Drag into dotted area to create Condition Unit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col md:flex-row justify-left md:space-x-2 space-y-2 md:space-y-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
                variant="outline"
                size="sm"
                className="outline outline-yellow-400 w-28"
                onDragStart={(event) => onDragStart(event, "assignmentNode")}
                draggable
              >
                Assignment
            </TooltipTrigger>
            <TooltipContent>
              <p>Drag into dotted area to create Assignment Unit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
                variant="outline"
                size="sm"
                className="outline outline-red-400 w-28"
                onDragStart={(event) => onDragStart(event, "assertionNode")}
                draggable
              >
                Assertion
            </TooltipTrigger>
            <TooltipContent>
              <p>Drag into dotted area to create Assertion Unit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
