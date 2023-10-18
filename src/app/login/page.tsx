import Image from 'next/image'
import {RegisterLink, LoginLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
export default async function Home() {
   
  const {getUser} =  getKindeServerSession();

  const user =  getUser();
  if(user) redirect("/dashboard")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      login page

      <LoginLink className="bg-green-400 text-black p-4 ">Sign in</LoginLink>
     

    </main>
  )
}
