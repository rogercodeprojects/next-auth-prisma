import {authOptions} from "@/app/lib/auth";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export  default async function AuthenticatedLayout({
                                                     children,
                                                   }: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions)
  if(!session){
    redirect('/')
  }

  return (<>{children}</>)
}
