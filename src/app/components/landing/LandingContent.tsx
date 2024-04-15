"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Bibhabendu",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      {/* <h2 className="text-center text-4xl text-white font-extrabold mb-10">Creators</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader className="grid grid-cols-1 md:grid-cols-2">
            
              <CardContent className="pt-4 px-0 md:ml-9">
               <Image alt ="ai"  width = {400} height = {100}src= "/ai.jpg" className= " object-cover"/>
              </CardContent>

              <CardContent className="pt-4 px-0  ">

              <h2 className = "text-2xl font-bold md:text-4xl leading-5 text-left md:mt-[100px] text-yellow-300">
             <span className=" text-rose-500">With the power of AI, pixels become  </span> paintbrushes, and imagination becomes art
               </h2>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}