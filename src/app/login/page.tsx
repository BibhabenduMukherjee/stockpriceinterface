import Image from 'next/image'
import {RegisterLink, LoginLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

import dynamic from 'next/dynamic';
const Login = dynamic(()=> import("../components/Login"),{
  ssr : false
})

export default async function Home() {
 const url = process.env.NEXT_PUBLIC_API_URL! || "http://localhost:3000";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <div className = "">
      <Login url = {url}/>
      </div>
    

    </main>
  )
}
