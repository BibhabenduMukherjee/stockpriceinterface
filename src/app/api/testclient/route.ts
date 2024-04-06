import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
   const data = await req.json();
   console.log(data);

//console.log(response.data);
new Promise((resolve, reject) => setTimeout(()=>{resolve},3000))

return  NextResponse.json({results: data} , {status : 200})

}