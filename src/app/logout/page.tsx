import Image from 'next/image'
import {LogoutLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Logout page

     <LogoutLink>Log Out</LogoutLink>
     

    </main>
  )
}
