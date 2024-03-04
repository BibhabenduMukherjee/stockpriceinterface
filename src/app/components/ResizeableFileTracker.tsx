"use client"
import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable'
import { MoreVertical } from 'lucide-react'
import FileDeleteAction from './FileDeleteAction'

function ResizeableFileTracker() {
    return (
        <ResizablePanelGroup
          direction="horizontal"
          className=" w-[900px] rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex flex-col h-[300px] items-center justify-center p-6">
              <span className="font-semibold"> List of files </span>
              <div className = "w-[290px] p-2 flex flex-col h-[300px] overflow-y-scroll">
                {["google" , "apple" , "microsoft" , "windows" , "netflix"].map((item)=>(
                    <div key={item} className= " hover:cursor-pointer  rounded-md  p-2 m-1 flex  justify-between items-start bg-gray-200/60 hover:bg-gray-100">
                         <p className = " font-medium">
                         {item}
                         </p>

                         <div className = "hover:bg-black/10 hover:cursor-pointer p-1">
                       
                        <FileDeleteAction/>
                         </div>
                    </div>
                ))}
              </div>
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
      )
}

export default ResizeableFileTracker