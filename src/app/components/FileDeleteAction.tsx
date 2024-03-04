"use client"
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "./ui/alert-dialog"
  
import { MoreVertical, TrashIcon } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";

function FileDeleteAction({file} : {file: Doc}) {
    const [isc , setIsc] = useState(false)
    const deleteFile = useMutation(api.files.deleteFiles)
  return (
    <>
    <AlertDialog open = {isc} onOpenChange={setIsc}>
  {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className="text-red-500">Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your data
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className = "bg-red-500"  onClick={()=>{deleteFile({fileId : file._id})}}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
      <MoreVertical className="outline-none"  />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-[42px] flex items-center justify-center space-x-3">
      
        <DropdownMenuItem onClick={()=>{setIsc(true)}}  className="text-red-600 hover:cursor-pointer  items-center flex gap-1 ">
        <TrashIcon className = "w-4 h-4"/>
            Delete</DropdownMenuItem>
        <DropdownMenuSeparator />
       
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
}

export default FileDeleteAction;
