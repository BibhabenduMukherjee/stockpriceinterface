"use client";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function Well({ username }: { username: string }) {
  return (
    <section className=" flex flex-col space-y-1 max-w-7xl mx-auto w-full ml-5 text-3xl md:text-5xl h-24 text-slate-950 text-left  mt-7 ">
      <p className={roboto.className}>
        {"Hello"} {username},{" "}
      </p>
      <p className="text-xl md:text-2xl">
        Get Stock Prediction From Pretrained model
        <span className="font-semibold mr-2 text-red-500"> 5+</span>
        Open Stock
      </p>
    </section>
  );
}

export default Well;
