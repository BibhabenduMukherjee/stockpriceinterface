"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { FileText, Loader } from "lucide-react";
import FileDeleteAction from "./FileDeleteAction";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const FormSchema = z.object({
  stockname: z.string(),
  advanced: z.boolean().default(false).optional(),
});

function ResizeableFileTracker({ backendurl , aurl , furl }: { backendurl: string  , aurl : string , furl : string}) {
  const userLocal = JSON.parse(localStorage.getItem("user")!);
  console.log(furl);
  
  let userId = `bm_${userLocal._id}`;
  let useremail = `${userLocal.user_email}`;
  const files = useQuery(api.files.getFiles, { userId });
  const [stockn, setStockn] = useState("");
  const [stockfilename, setFilename] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const sendFirstTrainingSuccess = useMutation(
    api.emails.sendFirstTrainingSuccess
  );
  const userInfo = useQuery(api.emails.getUserEmailStat, { userId: userId });
  const updateEmailSts = useMutation(api.emails.updateEmailSts);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      stockname: "",
      advanced: false,
    },
  });
  useEffect(() => {
    async function fun() {
      if (userInfo) {
        const user = userInfo[0];
        if (user) {
          if (user.emailSts === false) {
            //@ts-ignore
            try {
              const responseData =  axios.post(
                `${aurl}/sendemail`,
                { 
                  email: useremail,
                  user_name : user.user_name,
                  modelName : user.modelName,
                  modelurl : `${furl}/dashboard/mymodel?modelname=${user.modelName}&userid=${user.userId}`
                
                }
              );
              //console.log(responseData);
            } catch (err) {
              console.log(err);
            }

            updateEmailSts({ id: user._id });
          }
        }
      }
    }
    fun();
  }, [userInfo]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // call the training backend params [userId , fileName]
    console.log(data);

    const formData = new FormData();
    formData.append("fileName", stockfilename);
    formData.append("userId", userId);
    // console.log(a);
    setIsLoading(true);
    if (data.advanced === true) {
      try{
        const response = await axios.post(`${backendurl}/startTrainingAd`, formData)
        sendFirstTrainingSuccess({ userId: userId , user_name : userLocal.user_name , modelName : `Ad_${stockfilename}`});
      }catch(err){
        toast.error("Something went wrong")
      }
    }else{
      try{
        const response = await axios.post(`${backendurl}/startTraining`, formData)
        sendFirstTrainingSuccess({ userId: userId ,user_name : userLocal.user_name , modelName : stockfilename});
      }catch(err){
        toast.error("Something went wrong" , {position : "top-right"})
      }
    }
  ;
    // logic for sending email for those user who have try the model creation first
    
    toast.success("Trained Successfully" , {position : "top-right"})
    setIsLoading(false);
    
  }

  return (
    <>
      <Toaster/>
     <ResizablePanelGroup
      direction="horizontal"
      className=" w-[900px] rounded-lg border"
    >
     
      <ResizablePanel defaultSize={60}>
        <div className="flex flex-col h-[380px] items-center justify-center p-6">
          <span className="font-semibold"> List of uploaded files </span>
          <hr className="h-[10px]" />

          <div className="w-[300px] p-2 flex flex-col h-[400px] overflow-y-scroll">
            {files?.map((item) => (
              <div
                onClick={() => {
                  setStockn(item.stockname);
                  setFilename(item.filename);
                }}
                key={item._id}
                className=" hover:cursor-pointer  rounded-md  p-1 m-1 flex  justify-between items-start  hover:bg-gray-100"
              >
                <div className="flex space-x-2 items-center">
                  <FileText />
                  <p className=" font-medium text-[12px] md:text-[15px]">{item.stockname}</p>
                </div>

                <div className="hover:bg-black/10 hover:cursor-pointer p-1">
                  <FileDeleteAction file={item} url={backendurl} />
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
          <ResizablePanel  defaultSize={75} >
            <div className="flex flex-col items-center w-full md:w-[500px]  p-2">
              <div className="font-semibold mx-auto w-full   ml-6 mt-4  ">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-2/3 space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="stockname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock Name</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Select file" value={stockn}  disabled= {true} {...field} /> */}
                            <p className="p-2 text-medium">{stockn}</p>
                            {/* <input type="text" value= {stockn} placeholder="files"/> */}
                          </FormControl>
                          <FormDescription>Selected Stock</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="advanced"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Use Our Advanced model for Ai score
                            </FormLabel>
                            <FormDescription>
                              This optimise model parameter for optimal performance
                              {/* <Link href="/examples/forms">
                                mobile settings
                              </Link>{" "} */}
                              
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    <Button
                      disabled={isLoading ? true : false}
                      type="submit"
                      className="flex space-x-2"
                    >
                      <div>Start Training</div>

                      <div>
                        {isLoading ? (
                          <div className=" animate-spin">
                            <Loader className="" />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </>
   
  );
}

export default ResizeableFileTracker;
