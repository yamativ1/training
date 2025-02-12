// middleware.js

import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request) {
    const token = await request.headers.get("Authorization")?.split(" ")[1]
    if(!token){
        return NextResponse.json({message: "Token Not Found"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        //console.log("decodedJwt:", decodedJwt)
        return NextResponse.next()
    }catch(err){
        return NextResponse.json({message: "Token Not Found Please Login"})
    }
    
}

export const config = {
    matcher: ["/api/item/create","/api/item/update/:path*",
                                 "/api/item/delete/:path*"],
}