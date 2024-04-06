import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from 'next/headers'
export async function POST(req: Request, res: Response){
const body = await req.json();
const URL = process.env.AUTH_SERVER_URL!
console.log(body);

const response = await axios.post(`${URL}/login`, body )
//console.log(response.data);
const user = response.data?.result.user
console.log(response.data?.result.token);

//console.log(response.data.Results);
cookies().set("session", user._id)
return  NextResponse.json({ result : user , token :response.data?.result.token });
//return  NextResponse.json({"ok" : "ok"});
}