
import dynamic from "next/dynamic";
import React from "react";



const ConvexEmailTest  = dynamic(
  () => import("../../components/ConvexEmailTest"),
  {
    ssr: false,
  }
);

function page() {
  
  //console.log(userInfo)
  //console.log();

  return (
    <div>
      <ConvexEmailTest token= {process.env.RESEND_API_KEY!}/>
    </div>
  );
}

export default page;
