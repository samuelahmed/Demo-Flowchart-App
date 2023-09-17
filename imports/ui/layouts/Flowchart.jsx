import React, { useState, useRef, useCallback } from "react";
import { Card } from "../components/ui/card";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import AssertionNode from "../components/customNodes/AssertionNode";
import AssignmentNode from "../components/customNodes/AssignmentNode";
import ConditionNode from "../components/customNodes/ConditionNode";
import ExecutionNode from "../components/customNodes/ExecutionNode";

const nodeTypes = {
  assertionNode: AssertionNode,
  assignmentNode: AssignmentNode,
  conditionNode: ConditionNode,
  executionNode: ExecutionNode,
};

const initNodes = [];
const initEdges = [];
let id = 0;
const getId = () => `dndnode_${id++}`;

export const Flowchart = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="h-full">
      <ReactFlowProvider>
        <div className="h-full" ref={reactFlowWrapper}>
          <Card className="h-full my-4 mr-4">
            <ReactFlow
              nodes={nodes}
              onNodesChange={onNodesChange}
              edges={edges}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              nodeTypes={nodeTypes}
            >
              <Background />
              <Controls />
            </ReactFlow>
          </Card>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
