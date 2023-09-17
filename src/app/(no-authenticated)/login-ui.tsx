'use client'
import {signIn} from "next-auth/react"

export default function LoginUi() {
    return (
        <main className="bg-white flex flex-grow h-screen">
            <a className="text-black">No estas logeado</a>
            <button className="text-black" onClick={() => signIn("google", { callbackUrl: "/home" })}>Logearme</button>
        </main>
    )
}
