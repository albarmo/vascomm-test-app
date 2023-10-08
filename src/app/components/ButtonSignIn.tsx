"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SigninButton = () => {
    const { data: session } = useSession();
    const router = useRouter()

    if (session && session.user) {
        router.push('/')
    }
    return (
        <button onClick={() => signIn()} className="text-green-600 ml-auto">
            Sign In With Google
        </button>
    );
};

export default SigninButton;