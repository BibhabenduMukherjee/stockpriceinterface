import dynamic from 'next/dynamic'
import React from 'react'
const Signup = dynamic(()=> import("@/src/app/components/Signup") , {ssr  : false})
function page() {
  const url = process.env.NEXT_PUBLIC_API_URL! || "http://localhost:3000";
  return (
    <div className = "flex min-h-screen flex-col items-center justify-between">
    <Signup url = {url}/>
    </div>
  )
}

export default page