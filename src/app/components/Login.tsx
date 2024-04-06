"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

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
import Image from "next/image";
import axios from "axios";
import { useToast } from "./ui/use-toast";
const formSchema = z.object({
  user_email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});
function Login({ url }: { url: string }) {
  const router = useRouter();
  const {toast} = useToast()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try{
      const response = await axios.post(`${url}/api/login`, values);
      debugger
      console.log(response.data.token);
      const uid = `bm_${response.data.result._id}`;

      
      localStorage.setItem("user" , JSON.stringify(response.data?.result));
      localStorage.setItem("token_stocktrade" , response.data?.token);
      console.log("USER SAVED TO THE LOCALSTORAGE");
      
      router.push(`/dashboard`);
    }catch(e){
      toast({
        description : "Something went wrong"
      })
      return
    }
    
    console.log(values);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: "",
      password: "",
    },
  });
  return (
    <div className="flex flex-col items-center">
      <p className="  text-black underline underline-offset-1 text-2xl mt-[100px]">
        Fill Up Login Form
      </p>
      <div className="flex flex-col  items-center h-[450px] w-[850px] mt-[30px] rounded-md shadow-xl bg-white ">
        
        <div className = "flex items-center mt-[68px] space-x-12">
        <div className="w-[300px]   ">
          <Image
            src={"/tp.png"}
            className="mx-auto"
            alt="empty"
            width={300}
            height={300}
          />
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-[400px] space-y-3"
            >
              <FormField
                control={form.control}
                name="user_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Email"  autoComplete="off" {...field} />
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
                      <Input placeholder="Enter Password" autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        </div>
     
        <div className = "flex w-[800px] mt-[40px] bg-pink-400/50">
          <div className = " h-[50px] mt-3  ml-[86px]">
            <div className = "p-2">
              <p>Don't have account { " " }?
                <a href="/signup" className = "text-blue-600 ml-2">Sign up</a>
                 </p> 
            </div>
          </div>
          
        </div>


      </div>
    </div>
  );
}

export default Login;
