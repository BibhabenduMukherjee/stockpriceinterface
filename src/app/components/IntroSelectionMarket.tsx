"use client";
import React from "react";
interface PageProps {
  s: string;
  
}

// have the code of selected stock market
function IntroSelectionMarket({ s }: PageProps) {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-yellow-100/50 to-pink-100/10 blur-3xl w-[25rem] h-[44rem] rotate-[-28deg] transform -translate-x-[10rem] "></div>
          <div className="bg-gradient-to-tl from-blue-400 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] "></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                  Make Prediction Over{" "}
                  <span className=" text-emerald-600">
                    {s[0].toUpperCase() + s.slice(1, s.length).toLowerCase()}
                  </span>{" "}
                  Stock Market
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-md md:text-lg text-black">
                  Preline UI is an open-source set of prebuilt UI components,
                  ready-to-use examples and Figma design system based on the
                  utility-first Tailwind CSS framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSelectionMarket;
