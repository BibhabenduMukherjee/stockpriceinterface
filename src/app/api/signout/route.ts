import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse){
    const requestHeaders = new Headers(req.headers)
    requestHeaders.delete("Set-Cookie")
    requestHeaders.set("Set-Cookie",
    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT")
      
      // Respond with a success message
      return  NextResponse.json({ result : "Logout"});
}