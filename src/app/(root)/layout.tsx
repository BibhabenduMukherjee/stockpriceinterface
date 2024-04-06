import React from "react";

import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
const Navbar = dynamic(()=> import("../components/Navbar") , {ssr : false})
function layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="h-full">
      <Navbar/>
      <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
}

export default layout;
