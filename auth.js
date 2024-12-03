import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { CANDIDATEE_QUERY } from "./sanity/lib/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const candidates = await client.fetch(CANDIDATEE_QUERY, {
                email: user.email,
            });

            if (candidates.length > 0) {
                return "/dashboard/candidate";
            } else {
                return "/create-profile";
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
