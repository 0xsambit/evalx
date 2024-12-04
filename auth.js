import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { CANDIDATEE_QUERY, RECRUITER_QUERY } from "./sanity/lib/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const candidates = await client.fetch(CANDIDATEE_QUERY, {
                email: user.email,
            });
            const recruiters = await client.fetch(RECRUITER_QUERY, {
                email: user.email,
            });
            if (candidates.length > 0) {
                return "/dashboard/candidate";
            } else if (recruiters.length > 0) {
                return "/dashboard/recruiter";
            } else {
                return "/";
            }
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) {
                return url;
            } else if (url.startsWith("/")) {
                return new URL(url, baseUrl).toString();
            }
            return baseUrl;
        },
    },
});
