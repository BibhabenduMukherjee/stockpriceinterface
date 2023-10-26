import React from "react";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

function layout({ children }: { children: React.ReactNode }) {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <div className="h-full">
      <Navbar profilePic={user.picture ? user.picture : ""} />
      <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
}

export default layout;
