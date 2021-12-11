import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  //Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  //allow the requests if the following is true:
  //1, its a request for the next-auth session and provider fetching
  //2, The token Exist
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  //redirect if they dont have a tokens
  if (!token && pathname !== "/Login") {
    return NextResponse.redirect("/Login");
  }
}
