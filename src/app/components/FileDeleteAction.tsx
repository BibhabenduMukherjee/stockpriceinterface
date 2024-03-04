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

function FileDeleteAction() {
    const [isc , setIsc] = useState(false)
  return (
    <>
    <AlertDialog open = {isc} onOpenChange={setIsc}>
  {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
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
