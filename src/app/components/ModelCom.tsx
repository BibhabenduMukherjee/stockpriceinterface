"use client";
import React from "react";
import { Card, CardHeader, CardFooter } from "./ui/card";
import Link from "next/link";
import { Delete } from "lucide-react";
import { Button } from "./ui/button";

interface Acc {
  files: string[];
  status: string;
}
interface pageProps {
  data: Acc;
  caption: string[];
}

function ModelCom({ data, caption }: pageProps) {
  return (
    <div className="max-w-6xl mx-auto mt-[20px]">
      {data.files.length < 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {data.files.map((item) => (
            <div key={item}>
              <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="p-4 pt-2 h-[180px]">
                  <div className="mb-8 ">
                    <a
                      href="/dashboard/trainedmodel"
                      className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                    >
                      {item.split(".")[0].split("_")[0] === "Ad"
                        ? item.split(".")[0].split("_")[0] +
                          " " +
                          item.split(".")[0].split("_")[4] +
                          " years (advanced)"
                        : item.split(".")[0].split("_")[0] +
                          " " +
                          item.split(".")[0].split("_")[4] +
                          " years"}
                    </a>
                    <p className="text-gray-700 text-sm">
                      {caption[Math.floor(Math.random() * caption.length)]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className= "flex flex-col">
         <div className="flex items-center justify-center">
           <img src="/empty.png" alt="empty_image" className="w-[340px]"/>
        </div>
        <div className=  "text-center">
<p className = "text-md">
  There is no pre-trained model 
</p>
<Button variant={"outline"} className="bg-black text-white hover:bg-black hover:text-blue-400 mt-3">
   <a href="/prediction">Train Now</a>
</Button>
        </div>
        </div>
        
      )}
    </div>
  );
}

export default ModelCom;
