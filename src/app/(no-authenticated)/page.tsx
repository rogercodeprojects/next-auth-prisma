import LoginUi from "@/app/(no-authenticated)/login-ui";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/lib/auth";
import {redirect} from "next/navigation";

export default async function Home() {
    const session = await getServerSession(authOptions)
    if (!!session) {
        redirect('/home')
    }
    return (
        <LoginUi/>
    )
}
