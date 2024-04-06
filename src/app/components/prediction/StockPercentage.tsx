"use client";
import { MoveDownRight, MoveUpRight } from "lucide-react";
import React from "react";

interface PageProps {
  one_month_change: number;
  two_weeks_change: number;
  three_months_change: number;
}

function StockPercentage({
  one_month_change,
  two_weeks_change,
  three_months_change,
}: PageProps) {
  return (
    <div>
      <div>
        <div className=" text-black h-[200px] flex flex-col gap-4  mx-auto max-w-4xl p-4">
          <p className="text-4xl font-bold">{"hello"}</p>
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
        </div>
      </div>
    </div>
  );
}

export default StockPercentage;
