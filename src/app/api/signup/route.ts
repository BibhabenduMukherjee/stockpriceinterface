import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from 'next/headers'
export async function POST(req: Request, res: Response){
const body = await req.json();
const URL = process.env.AUTH_SERVER_URL!
console.log(body);


try{
    const response = await axios.post(`${URL}/register`, body )
    //console.log(response);
   
    return  NextResponse.json({ result : "user registred"});
}catch(err){
    return  NextResponse.json({ result : "error",});
}


return  NextResponse.json({ result : ""});
//return  NextResponse.json({"ok" : "ok"});
}