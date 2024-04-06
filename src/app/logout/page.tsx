
import dynamic from 'next/dynamic';
const LogoutPage = dynamic(()=> import("@/src/app/components/LogoutPage"), {ssr : false})
export default async function Home() {
 const URL = process.env.NEXT_PUBLIC_API_URL!
 //console.log(URL);
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Logout page

     <LogoutPage URL={URL} />
     

    </main>
  )
}
