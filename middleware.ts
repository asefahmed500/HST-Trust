import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.role === "admin";
    const isCEO = token?.role === "ceo";
    const isMD = token?.role === "md";
    const isChairman = token?.role === "chairman";

    if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
      return NextResponse.rewrite(new URL("/auth/signin", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/dashboard") && 
        !(isAdmin || isCEO || isMD || isChairman)) {
      return NextResponse.rewrite(new URL("/auth/signin", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};