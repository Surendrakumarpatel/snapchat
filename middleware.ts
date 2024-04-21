import NextAuth, { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async authorized({ auth, request }: { auth: Session | null; request: NextRequest }) {
            const user = auth?.user;
            const chatPath = request.nextUrl.pathname.startsWith("/chat");
            const authPath = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup");

            if (!user && chatPath) {
                return false;
            }
            if (user && authPath) {
                return NextResponse.redirect(new URL("/chat", request.nextUrl));
            }
            return true;
        }
    },
};
export default NextAuth(authConfig).auth;