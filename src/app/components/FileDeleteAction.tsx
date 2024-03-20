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
  
import { FileDown, MoreVertical, TrashIcon } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import axios from "axios";

function FileDeleteAction({file} : {file: Doc}) {
    const [isc , setIsc] = useState(false)
    const deleteFile = useMutation(api.files.deleteFiles)

    async function downloadFileFromServer(filename : string , userId : string) { 
     location.replace(`http://127.0.0.1:3001/get-csv?userId=${userId}&fileName=${filename}`)
     //const res = await axios.get()
    }
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
      <AlertDialogAction className = "bg-red-500"  onClick={()=>{
        deleteFile({fileId : file._id})
        
       // deleFileFromServer(file.filename , file.userId)
        }}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
      <MoreVertical className="outline-none"  />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" flex flex-col ">
      
        <DropdownMenuItem onClick={()=>{setIsc(true)}}  className= " space-x-1 text-red-600 hover:cursor-pointer  items-center flex gap-1 ">
        <TrashIcon className = "w-4 h-4"/>
            Delete</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={()=>{downloadFileFromServer(file.filename,file.userId)}}  className=" hover:cursor-pointer  flex space-x-1 gap-1 ">
        <FileDown className = "w-4 h-4"/>
            Download</DropdownMenuItem>
        <DropdownMenuSeparator />
       
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
}

export default FileDeleteAction;
