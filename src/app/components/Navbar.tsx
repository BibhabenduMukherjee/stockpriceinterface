"use client"
import React from 'react'
import Link from "next/link";
import { cn } from '@/lib/utils';
import MobileSidebar from './MobileSidebar';
import { Poppins } from 'next/font/google';
import ModeToggle from './ModeToggle';

const font = Poppins({ weight: "600", subsets: ["latin"] });
function Navbar() {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-[71px] border-b border-primary/10 bg-secondary">
    <div className="flex items-center">
      <MobileSidebar/>
      <Link  href="/"  >
        <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
          companion.ai
        </h1>
      </Link>
    </div>
    <div className="flex items-cente space-x-4 ">
      
      <div className="">
      <ModeToggle />
      </div>
     
      
    </div>
  </div>
  )
}

export default Navbar