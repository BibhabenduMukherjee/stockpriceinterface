"use client";
import React, { Suspense, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { MoreVertical } from "lucide-react";
import FileDeleteAction from "./FileDeleteAction";
import {useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { toast } from "./ui/use-toast"
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";
const FormSchema = z.object({
    stockname: z.string()
  })
  
function InputForm({stockn} : {stockn:string}) {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        stockname: "",
      },
    })
   
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{stockn}</code>
          </pre>
        ),
      })
    }
   
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="stockname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stock Name</FormLabel>
                <FormControl >
                  {/* <Input placeholder="Select file" value={stockn}  disabled= {true} {...field} /> */}
                  <p className = "p-2 text-medium">{stockn}</p>
                  {/* <input type="text" value= {stockn} placeholder="files"/> */}
                </FormControl>
                <FormDescription>
                  Selected Stock
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Start Training</Button>
        </form>
      </Form>
    )
  }

function ResizeableFileTracker({userId} : {userId : string}) {
    const files = useQuery(api.files.getFiles , {userId})
    const [stockn , setStockn] = useState("")
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className=" w-[900px] rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex flex-col h-[300px] items-center justify-center p-6">
          <span className="font-semibold"> List of uploaded files </span>
          <Suspense fallback = {<p>Loading..</p>} >
          <div className="w-[300px] p-2 flex flex-col h-[300px] overflow-y-scroll">
            {files?.map(
              (item) => (
                <div
                  onClick={() => {
                    setStockn(item.stockname)}}
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
            <div className="flex flex-col items-center w-[500px]  p-2">
              <div className="font-semibold mx-auto w-full   ml-6 mt-4  ">
              <InputForm stockn= {stockn.length>0 ? stockn : "No file selected yet"}/>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ResizeableFileTracker;
