import dynamic from 'next/dynamic';
import React from 'react'

const PredictedGraph = dynamic(()=> import("@/src/app/components/prediction/PredictedGraph") , {
    ssr : false
})

function page({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
     console.log(searchParams["modelname"])
     console.log(searchParams["userid"])
    
    //const url = new URL(requestHeaders.get('x-forwarded-host') + Request.url());
  return (
    <div>
        <PredictedGraph/>
    </div>
  )
}

export default page