"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader, Loader2, Loader2Icon } from "lucide-react";
import { useEdgeStore } from "@/src/lib/edgestore";
import Link from "next/link";
const formSchema = z.object({
  user_name: z.string().min(3, {
    message: "Username must be at least 5 characters.",
  }),
  user_email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});
function Signup({ url }: { url: string }) {
  const { toast } = useToast();
  const {edgestore} = useEdgeStore()
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [file , setFile] = useState<File>()
  const  [progras , setProgras] = useState(0)
  const [Url , setUrl] = useState("")
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {

      setLoading(true)
      // file upload
      let res;
      if(file){
        res = await edgestore.publicFiles.upload({
          file,
          onProgressChange : (pro)=>{
            setProgras(pro)
          }
        })
      
        console.log(res.url);
        
        
      }


      const response = await axios.post(`${url}/api/signup`, {...values,profileImg:res?.url});
      setIsRedirecting(true);
      setLoading(false)
      setTimeout(() => {
        setIsRedirecting(false);
        router.push(`/login`);
      }, 4200);

      toast({
        title: "Thank you for registering",
        duration: 1500,
        description: (
          <div className="bg-green-400 p-2 text-black">
            you have been registered successfully
          </div>
        ),
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: (
          <div className="bg-green-400 p-2 text-black">
            Please check your data again
          </div>
        ),
      });
    }

    console.log(values);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      password: "",
    },
  });
  console.log(form.formState.errors);

  return (
    <div className="flex flex-col items-center">
      <p className="  text-black underline underline-offset-1 text-2xl mt-[20px]">
        Fill Up Registration Form
      </p>
      <div className="flex flex-col space-y-5  items-center w-[325px]  md:h-[600px] md:w-[900px] mt-[30px] rounded-md shadow-md bg-gray-100 ">
        <div className="flex items-center mt-[68px] md:space-x-12">
          <div className="w-[300px]  hidden md:flex  rounded-full  ">
            <Image
              src={"/tpp.png"}
              className=" mx-auto object-fill"
              alt="empty"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" w-[300px] space-y-5"
              >
                {" "}
                <FormField
                  control={form.control}
                  name="user_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Email"  autoComplete="off" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="user_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Email" autoComplete="off" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Password" autoComplete="off"  {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div>
                  <div className = "pb-2">
                    <p className = "text-black text-[14px] font-medium">Profile image</p>
                  </div>
                  <Input type="file"  className = "hover:cursor-pointer" accept="image/png, image/jpeg,image/jpeg"  onChange={(e)=>{
                    // @ts-ignore
                    if(e.target.files?.[0].size> 1024*1024) {
                      alert("File size shoud not be more than 1MB")
                      e.target.value = ""
                      e.target.files=null
                      return
                  }
                    setFile(e.target.files?.[0])
                  } }/>
                 </div>
                <div className = "h-[8px] bg-slate-300 rounded-md w-full overflow-hidden">
                  <div className = " h-[8px]  transition-all duration-150 bg-black" style = {{width : `${progras}%`}}/>
                </div>
                <Button type="submit" disabled = {isLoading}>
                  Submit
                 {isLoading ? <p>
                  <Loader2Icon className="h-[18px] ml-2 w-[18px] animate-spin"/>
                 </p> : ""} 
                </Button>
               
              </form>
            </Form>
          </div>
        </div>

        
        <div className="w-full   text-black">
          <div className="w-[270px] p-2 flex space-x-3 mx-[270px]">
            <div>
              <p>
                {isRedirecting ? (
                  <Loader className="w-8 h-8 animate-spin" />
                ) : (
                  ""
                )}
              </p>
            </div>

            <div className="mt-1">
              {isRedirecting ? (
                <span className="text-md ">
                  Redirecting to <span className="text-red-500">Login</span>{" "}
                  Page
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;
