import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { CANDIDATEE_QUERY, RECRUITER_QUERY } from "./sanity/lib/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user }) {
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                const email = user.email;

                // Fetch candidate and recruiter profiles from Sanity
                const candidates = await client.fetch(CANDIDATEE_QUERY, {
                    email,
                });
                const recruiters = await client.fetch(RECRUITER_QUERY, {
                    email,
                });

                if (candidates.length > 0) {
                    token.redirectTo = "/dashboard/candidate";
                } else if (recruiters.length > 0) {
                    token.redirectTo = "/dashboard/recruiter";
                } else {
                    token.redirectTo = "/create-profile";
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.redirectTo = token.redirectTo;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) {
                return `${baseUrl}${url}`;
            } else if (url.startsWith(baseUrl)) {
                return url;
            }
            return baseUrl;
        },
    },
});
