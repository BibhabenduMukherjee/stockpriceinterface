"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileSidebar from "./MobileSidebar";
import { Poppins } from "next/font/google";
import ModeToggle from "./ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const font = Poppins({ weight: "600", subsets: ["latin"] });
function Navbar() {
  const user = JSON.parse(localStorage.getItem('user')!)
  //console.log(user.profileImg);
  
  return (
    <div className="   z-50 flex justify-between items-center py-2 px-4 h-[70px] border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/dashboard">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            StockTrade
          </h1>
        </Link>
      </div>
      <div className="flex items-cente space-x-2 ">
        <div className="mt-2">
          <Link href={"/logout"}>Sign out</Link>
        </div>

        <div>
          <Avatar>
            <AvatarImage src={user.profileImg} className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
