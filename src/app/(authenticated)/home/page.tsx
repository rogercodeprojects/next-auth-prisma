'use client'
import {signOut} from "next-auth/react"

export default function Home() {
    return (
        <main className="bg-white flex flex-grow h-screen">
            <a className="text-black">Estas logeado</a>
            <button className="text-black" onClick={() => signOut({callbackUrl: "/home"})}>Sign out</button>
        </main>
    )
}
