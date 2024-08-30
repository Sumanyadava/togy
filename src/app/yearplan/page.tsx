import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const page = () => {
  return (
    <div className="h-screen w-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          
          <div className="bg-red-400 h-screen w-full">Years</div>


        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          
        <div className="bg-yellow-400 h-screen w-full">Months</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
