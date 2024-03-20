import React from "react";

import axios from "axios";
import Hello from "../../components/Hello";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Well from "../../components/Well";

import { Captions, getCaption } from "@/captionstock";
import dynamic from "next/dynamic";

const ModelCom = dynamic(
  () => import("../../components/ModelCom"),
  {
    ssr: false,
  }
);

async function page() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const pretrainedModel = await axios.get(`http://127.0.0.1:3001/pretrainedModel?userId=${user.id}`);

  //console.log(pretrainedModel.data.files);
  if (!user || !user.id) redirect("/login");

  return (
    <div className="flex flex-col space-y-2 ">
      <Well username={user.given_name} />
      <hr/>
      <section className="">
        <ModelCom caption={Captions}  data = {pretrainedModel.data}/>
      </section>
    </div>
  );
}

export default page;
