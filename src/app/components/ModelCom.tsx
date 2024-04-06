"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardFooter } from "./ui/card";
import Link from "next/link";
import { Delete } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";

interface Acc {
  files: string[];
  status: string;
}
interface pageProps {

  caption: string[];
}

function ModelCom({ caption }: pageProps) {
  const [data, setData] = useState<string[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  let user = JSON.parse(localStorage.getItem("user")!)
  let userId = `bm_${user._id}`

  useEffect(() => {
    async function call() {
      try {
        const pretrainedModel = await axios.get(
          `http://127.0.0.1:3001/pretrainedModel?userId=${userId}`
        );
     console.log(pretrainedModel.data);
       const finaldata = [...pretrainedModel.data.files , ...pretrainedModel.data.adfiles]
        setData(finaldata);
       
       
      } catch (err) {
        console.log(err);
      }
    }
    setLoad(true)
    setTimeout(()=>{
      call();
      setLoad(false)
    },1500)
  }, []);

  return (
    <div className="max-w-6xl flex items-center justify-center mx-auto mt-[20px]">
     {load ? <div className="w-[72rem] mt-4 h-[500px] text-white bg-gray-300/40 animate-pulse">
       <div>

       </div>
     </div> : <>
     {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {data.map((item) => (
            <div key={item} className="hover:cursor-pointer">
              <Link
                href={`dashboard/mymodel?modelname=${
                  item.split(".")[0]
                }&userid=${userId}`}
              >
                <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                  <div className="p-4 pt-2 h-[180px]">
                    <div className="mb-8 ">
                      <p className=" font-bold mt-2 hover:text-red-500">
                        {item.split(".")[0].split("_")[0] === "Ad"
                          ? item.split(".")[0].split("_")[1] +
                            " " +
                            item.split(".")[0].split("_")[5] +
                            " years (advanced)"
                          : item.split(".")[0].split("_")[0] +
                            " " +
                            item.split(".")[0].split("_")[4] +
                            " years"}
                      </p>

                      <p className="text-gray-700 mt-[20px]  text-sm">
                        {caption[Math.floor(Math.random() * caption.length)]}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <img src="/empty.png" alt="empty_image" className="w-[340px]" />
          </div>
          <div className="text-center">
            <p className="text-md">There is no pre-trained model</p>
            <Button
              variant={"outline"}
              className="bg-black text-white hover:bg-black hover:text-blue-400 mt-3"
            >
              <a href="/prediction">Train Now</a>
            </Button>
          </div>
        </div>
      )}
     
     </>}

     
    </div>
  );
}

export default ModelCom;

//http://localhost:3000/dashboard/mymodel?modelname=Apple_kp_9065799bc371497f9d4f031c655cb6f9_Bibhabendu_2.h5&userid=kp_9065799bc371497f9d4f031c655cb6f9
