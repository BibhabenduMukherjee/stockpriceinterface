import { NextResponse , NextRequest } from "next/server";

import { cookies } from 'next/headers'
export async function GET(req: NextRequest){
const session = cookies().get("session")?.value
console.log(session);

return  NextResponse.json({ result : session});
//return  NextResponse.json({"ok" : "ok"});
}