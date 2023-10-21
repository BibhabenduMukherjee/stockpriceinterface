import React from "react";

import axios from "axios";
import Hello from "../../components/Hello";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Well from "../../components/Well";
import ModelCom from "../../components/ModelCom";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const pretrainedModel = await axios.post("http://127.0.0.1:3001/getPreTrainedModels" ,{});
  //console.log(pretrainedModel.data.preTrainedModelNames);
  if (!user || !user.id) redirect("/login");

  return (
    <div className="flex flex-col space-y-2 ">
      <Well username={user.given_name} />
      <hr/>
      <section>
        <ModelCom data = {pretrainedModel.data}/>
      </section>
    </div>
  );
}

export default page;
