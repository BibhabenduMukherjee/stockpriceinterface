import Image from 'next/image'
import {RegisterLink, LoginLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
import {LandingNavbar} from './components/landing/LandingNavbar';
import {LandingHero} from './components/landing/LandingHero';
import {LandingContent} from './components/landing/LandingContent';
export default async function Home() {

  return (
    <main className="">
     

     <LandingNavbar/>
    <LandingHero />
   



    </main>
  )
}
