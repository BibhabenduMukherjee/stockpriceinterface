"use client";
import React, { Suspense, useEffect, useState } from "react";import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";import { FileText, Loader} from "lucide-react";import FileDeleteAction from "./FileDeleteAction";
import { useMutation, useQuery } from "convex/react";import { api } from "@/convex/_generated/api";
import { zodResolver } from "@hookform/resolvers/zod";import { useForm } from "react-hook-form";import { z } from "zod";
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
import { toast } from "./ui/use-toast";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
const FormSchema = z.object({
  stockname: z.string(),
});

// function InputForm({
//   userId,
//   stockn,
//   useremail,
//   f,
//   backendurl,
// }: {
//   userId: string;
//   stockn: string;
//   useremail : string;
//   f: string;
//   backendurl: string;
// }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const sendFirstTrainingSuccess = useMutation(
//     api.emails.sendFirstTrainingSuccess
//   );
//   const userInfo = useQuery(api.emails.getUserEmailStat, { userId: userId });
//   const updateEmailSts = useMutation(api.emails.updateEmailSts);
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       stockname: "",
//     },
//   });

//   useEffect(()=>{

//    async function fun() {
//     if (userInfo) {
//       const user = userInfo[0];
//       if (user) {
//         if (user.emailSts === false) {
//           //@ts-ignore
//           try {
//             const responseData = await axios.post(
//               "http://localhost:3000/api/v2",
//               { useremail :  useremail }
//             );
//             console.log(responseData);

//           } catch (err) {
//             console.log(err);
//           }

//           updateEmailSts({ id: user._id });
//         }
//       }
//     }
//    }
//     fun()

//   },[userInfo])

//   async function onSubmit(data: z.infer<typeof FormSchema>) {
//     // call the training backend params [userId , fileName]
//     const formData = new FormData();
//     formData.append("fileName", f);

//     formData.append("userId", userId);
//     // console.log(a);

//     setIsLoading(true);
//     const response = await axios.post(`${backendurl}/startTraining`, formData);

//     // logic for sending email for those user who have try the model creation first
//     sendFirstTrainingSuccess({ userId: userId });
//     console.log("userinfo");

//     setIsLoading(false);

//     toast({
//       title: "Model Information",
//       description: (
//         <div className="mt-2 w-[340px] text-md font-bold rounded-md bg-green-500 p-4">
//           Model Trained Successfully
//         </div>
//       ),
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="stockname"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Stock Name</FormLabel>
//               <FormControl>
//                 {/* <Input placeholder="Select file" value={stockn}  disabled= {true} {...field} /> */}
//                 <p className="p-2 text-medium">{stockn}</p>
//                 {/* <input type="text" value= {stockn} placeholder="files"/> */}
//               </FormControl>
//               <FormDescription>Selected Stock</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button
//           disabled={isLoading ? true : false}
//           type="submit"
//           className="flex space-x-2"
//         >
//           <div>Start Training</div>

//           <div>
//             {isLoading ? (
//               <div className=" animate-spin">
//                 <Loader className="" />
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </Button>
//       </form>
//     </Form>
//   );
// }

function ResizeableFileTracker({
  userId,
  useremail,
  backendurl,
}: {
  userId: string;
  useremail: string;
  backendurl: string;
}) {
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
              const responseData = await axios.post(
                "http://localhost:3000/api/v2",
                { useremail: useremail }
              );
              console.log(responseData);
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
    const formData = new FormData();
    formData.append("fileName", stockfilename);
    formData.append("userId", userId);
    // console.log(a);
    setIsLoading(true);
    const response = await axios.post(`${backendurl}/startTraining`, formData);
    // logic for sending email for those user who have try the model creation first
    sendFirstTrainingSuccess({ userId: userId });setIsLoading(false);
     toast({
      title: "Model Information",
      description: (
        <div className="mt-2 w-[340px] text-md font-bold rounded-md bg-green-500 p-4">
          Model Trained Successfully
        </div>
      ),
    });
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className=" w-[900px] rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex flex-col h-[300px] items-center justify-center p-6">
          <span className="font-semibold"> List of uploaded files </span>
          <hr className="h-[10px]" />
          <Suspense fallback={<p>Loading..</p>}>
            <div className="w-[300px] p-2 flex flex-col h-[300px] overflow-y-scroll">
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
                    <p className=" font-medium">{item.stockname}</p>
                  </div>

                  <div className="hover:bg-black/10 hover:cursor-pointer p-1">
                    <FileDeleteAction file={item}  />
                  </div>
                </div>
              ))}
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
  );
}

export default ResizeableFileTracker;
