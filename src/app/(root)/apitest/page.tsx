import dynamic from 'next/dynamic'
import React from 'react'


const Apitest = dynamic(()=> import("../../components/apitest/Apitest"),  {ssr : false})
function page() {
  return (
    <div>
        <Apitest/>
    </div>
  )
}

export default page