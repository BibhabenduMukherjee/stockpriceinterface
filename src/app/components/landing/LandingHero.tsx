"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";


import { Button } from "../ui/button";

export const LandingHero = () => {
  

  return (
    <div className=" text-white h-screen bg-slate-900 font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Trade<span className = 'text-emerald-500 animate-pulse '></span> Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "MicroSoft Inc.",
                "Meta Inc.",
                "Nvidia cor.",
                "many more ..."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
       Invest to the market with our models ai score
      </div>
      <div>
        <Link href={"/login"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};