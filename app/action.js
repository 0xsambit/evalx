"use server";

import { auth } from "@/auth";

export const getEmail = async () => {
    const session = await auth();
    if (session) {
        return session.user.email;
    }
    return null;
};
