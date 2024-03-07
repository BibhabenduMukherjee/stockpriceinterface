"use client";
import { useGraphDataH } from "@/hooks/use-data";
import React from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import axios from "axios";
import { useFileSelectedYear } from "@/hooks/use-year";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
interface PageProps {
  userName: string | null;
  userId: string;
  stockName: string ;
  mode: string | null;
}
function UseFetchedDataCom({ mode, stockName, userId, userName }: PageProps) {

  //* may be insert the stockName and fileName to the convex which then shown as list of  uploaded files *//

  const dataG = useGraphDataH();
  const year = useFileSelectedYear();
  const filename = `${stockName}_${userId}_${userName}_${year.year}`;
  // use for testing the convex endpoint 
  
  const createFile = useMutation(api.files.createFile)


  console.log(dataG.data);
  const { toast } = useToast();
  function handleClick() {
    const newData = dataG.data;
 
    const apiUrl = "http://127.0.0.1:3001/save_data";
    axios
      .post(apiUrl, newData, { params: { filename, userid: userId } })
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
        if (error.response.status === 409) {
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
      {mode === "dev" ? (
        <>
          <div className="relative flex items-center   justify-center max-w-5xl top-[290px]  mx-auto  text-white/75 w-[600px] h-[100px] ">
            <div>
              <div>
                <Button
                  onClick={()=>{
                    createFile({stockname : `${stockName}-${year.year}y` , filename : filename , userId:userId})
                  }}
                  variant={"secondary"}
                  className="p-4 w-[300px] flex space-x-2 hover:bg-black   font-semibold bg-slate-800 text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="hover:bg-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div>Upload</div>
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {dataG.data.length > 0 && (
            <div className="relative flex items-center   justify-center max-w-5xl top-[290px]  mx-auto  text-white/75 w-[600px] h-[100px] ">
              <div>
                <div>
                  <Button
                    onClick={handleClick}
                    variant={"secondary"}
                    className="p-4 w-[300px] flex space-x-2 hover:bg-black   font-semibold bg-slate-800 text-white"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 15 15"
                      fill="none"
                      className="hover:bg-black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div>Upload</div>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default UseFetchedDataCom;
