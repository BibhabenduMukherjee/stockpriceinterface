import axios from "axios";
import { NextResponse } from "next/server";
const t = process.env.RESEND_API_KEY

export async function POST(req: Request, res: Response){
   const data = await req.json();
   console.log(data);
   const {useremail} =  data
   const response = await axios.post("https://api.resend.com/emails" , {
    from :  "Acme <onboarding@resend.dev>",
    to : [`${useremail}`],
    subject : "Successful Stock Model Creation",
    text : "Thank you to use our service"
   } , {
    headers: {
        Authorization : "Bearer " + t,
        ContentType : "application/json"
    }
   }) ;
   
 
console.log(response.data);

return  NextResponse.json({results: "ok"} , {status : 200})

}