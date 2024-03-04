"use client";
import React, { Suspense } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { MoreVertical } from "lucide-react";
import FileDeleteAction from "./FileDeleteAction";
import {useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function ResizeableFileTracker() {
    const files = useQuery(api.files.getFiles)
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className=" w-[900px] rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex flex-col h-[300px] items-center justify-center p-6">
          <span className="font-semibold"> List of files </span>
          <Suspense fallback = {<p>Loading..</p>} >
          <div className="w-[290px] p-2 flex flex-col h-[300px] overflow-y-scroll">
            {files?.map(
              (item) => (
                <div
                  key={item}
                  className=" hover:cursor-pointer  rounded-md  p-2 m-1 flex  justify-between items-start bg-gray-200/60 hover:bg-gray-100"
                >
                  <p className=" font-medium">{item.stockname}</p>

                  <div className="hover:bg-black/10 hover:cursor-pointer p-1">
                    <FileDeleteAction file = {item} />
                  </div>
                </div>
              )
            )}
          </div>
          </Suspense>
         
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizableHandle />
          <ResizablePanel defaultSize={75} maxSize={30}>
            <div className="flex h-full items-center justify-center p-6">
              <div className="font-semibold w-[400px]">Three</div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ResizeableFileTracker;
