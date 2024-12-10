// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    const { pathname } = req.nextUrl;

    // Define protected routes
    const protectedRoutes = [
        "/dashboard/candidate",
        "/dashboard/recruiter",
        "/create-profile",
    ];

    // If the user is trying to access a protected route
    if (protectedRoutes.includes(pathname)) {
        if (!token) {
            // If not authenticated, redirect to sign-in
            return NextResponse.redirect(new URL("/api/auth/signin", req.url));
        }
    }

    // If the user accesses the home page "/", redirect them based on their redirectTo
    if (pathname === "/") {
        if (token?.redirectTo) {
            return NextResponse.redirect(new URL(token.redirectTo, req.url));
        }
    }

    // Allow the request to proceed if no redirection is needed
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/dashboard/candidate",
        "/dashboard/recruiter",
        "/create-profile",
    ],
};
