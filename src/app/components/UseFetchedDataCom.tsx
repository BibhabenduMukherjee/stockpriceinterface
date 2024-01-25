"use client";
import { useGraphDataH } from "@/hooks/use-data";
import React from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import axios from "axios";

function UseFetchedDataCom() {
  const dataG = useGraphDataH();
 console.log(dataG.data);
 const { toast } = useToast();
  function handleClick() {
   
    const newData = dataG.data;
    const filename = "bivu";
    const apiUrl = 'http://127.0.0.1:3001/save_data';
    axios
      .post(apiUrl, newData, { params: { filename } })
      .then((response) => {
        if (response.status === 200) {
          console.log("Data saved successfully.");
          toast({
            variant: "default",
            title: "Data Successfully Uploaded",
            description: "You are the own this data ",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        } else {
          console.error("Error:", response.status);
          
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        if(error.response.status === 409){
            toast({
                variant: "destructive",
                title: "File Already exist on the server",
                description: "Don't upload the same file",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              });
              return;
        }
      });
  }

  return (
    <>
      {dataG.data.length > 0 && (
        <div className="relative flex items-center   justify-center bg-orange-400/90  max-w-5xl top-[270px]  mx-auto  text-white/75 w-[600px] h-[100px] ">
          <div>
            <div>
              <Button
                onClick={handleClick}
                variant={"secondary"}
                className="p-4 w-[300px]  font-semibold hover:text-black  text-emerald-500  text-lg   bg-black"
              >
                Upload data
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UseFetchedDataCom;
