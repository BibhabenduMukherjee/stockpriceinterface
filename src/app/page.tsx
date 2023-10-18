import Image from 'next/image'
import {RegisterLink, LoginLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
export default async function Home() {

  const {getUser} =  getKindeServerSession();
  const user = getUser();
  if(!user) redirect("/login")
  if(user) redirect("/dashboard");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     

    home  page


    </main>
  )
}
