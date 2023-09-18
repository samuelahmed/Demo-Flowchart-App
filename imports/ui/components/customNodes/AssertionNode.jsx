import React, { memo } from "react";
import { Handle, Position } from "reactflow";

function AssertionNode() {
  return (
    <div className="px-4 py-2 shadow-md bg-white border-2 border-gray-200 border-l-red-400 w-40">
      Assertion Unit
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(AssertionNode);
