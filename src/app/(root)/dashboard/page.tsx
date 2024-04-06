import React from "react";

import axios from "axios";
import Hello from "../../components/Hello";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Captions, getCaption } from "@/captionstock";
import dynamic from "next/dynamic";

const ModelCom = dynamic(() => import("../../components/ModelCom"), {
  ssr: false,
});

const Well = dynamic(() => import("../../components/Well"), {
  ssr: false,
});

async function page() {
  //if (!user || !user.id) redirect("/login");

  return (
    <div className="flex flex-col space-y-2 ">
      <Well username={""} />
      <hr />
      <section className="">
        <ModelCom caption={Captions} />
      </section>
    </div>
  );
}

export default page;
