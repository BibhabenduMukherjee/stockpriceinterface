"use client";
import { MoveDownRight, MoveUpRight } from "lucide-react";
import React from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button";

interface PageProps {
  one_month_change: number;
  two_weeks_change: number;
  three_months_change: number;
  price: number;
  accuracy : any,
  name : string;
  p : number,
  wikiurl : string;
  ab : string;
  mse : string;
}

function StockPercentage({
  one_month_change,
  two_weeks_change,
  three_months_change,
  price,
  accuracy,
  name,
  p,
  wikiurl,
  ab,
  mse
}: PageProps) {
  return (
    <div>
      <div>
        <div className=" text-black h-[200px] flex flex-col gap-4  mx-auto max-w-4xl p-4">
          <p className="text-2xl ml-2 font-bold">
            <a href={wikiurl} className="hover:underline">
            {name}
            </a>

              -  <span className= "text-[19px] text-blue-600 ">
          {p} ₹
            </span></p>
            <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Read More</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Companies Infomation</AlertDialogTitle>
          <AlertDialogDescription>
           {ab}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
          <div className="w-full flex justify-start space-x-3  items-start h-[40px]">
            <div className="w-[100px] p-2 flex space-x-3 ml-1  hover:cursor-pointer hover:bg-white/40">
              <div>
                <p className="text-[17px]">2W</p>
              </div>
              <div className="flex   space-x-1 ">
                {two_weeks_change < 0 ? (
                  <>
                    <p className="text-[15px] text-red-500">
                      {Math.abs(Number(two_weeks_change.toFixed(1)))}
                    </p>
                    <MoveDownRight className="h-4 w-4 text-red-400 font-bold" />
                  </>
                ) : (
                  <>
                    <p className="text-[15px] text-green-600">{two_weeks_change.toFixed(1)}</p>
                    <MoveUpRight className="h-4 w-4 text-green-600 font-bold" />
                  </>
                )}
              </div>
            </div>
            <div className="w-[100px] p-2 flex space-x-3 ml-3  hover:cursor-pointer hover:bg-white/40">
              <div>
                <p className="text-[17px]">1M</p>
              </div>
              <div className="flex   space-x-1 ">
                {one_month_change < 0 ? (
                  <>
                    <p className="text-[15px] text-red-500">
                      {Math.abs(Number(one_month_change.toFixed(1)))}
                    </p>
                    <MoveDownRight className="h-4 w-4 text-red-500 font-bold" />
                  </>
                ) : (
                  <>
                    <p className="text-[15px] text-green-600 ">{one_month_change.toFixed(1)}</p>
                    <MoveUpRight className="h-4 w-4 text-green-600  font-bold" />
                  </>
                )}
              </div>
            </div>
            <div className="w-[100px] p-2 flex space-x-2 ml-3  hover:cursor-pointer hover:bg-white/40">
              <div>
                <p className="text-[17px]">3M</p>
              </div>

              {three_months_change < 0 ? (
                <>
                  <p className="text-[15px] text-red-500 ">
                    {Math.abs(Number(three_months_change.toFixed(1)))}
                  </p>
                  <MoveDownRight className="h-4 w-4 text-red-500 font-bold" />
                </>
              ) : (
                <>
                  <p className="text-[15px] text-green-600 ">
                    {Math.abs(Number(three_months_change.toFixed(1)))}
                  </p>
                  <MoveUpRight className="h-4 w-4 text-green-600  font-bold" />
                </>
              )}
            </div>
          </div>
          <p className = "text-[8px] ml-3">{Number(accuracy).toFixed(2)}% accurate</p>
          {/* <p className = "text-[8px] ml-3">{Number(mse).toFixed(4)}% accurate</p> */}
        </div>
      </div>
    </div>
  );
}

export default StockPercentage;
