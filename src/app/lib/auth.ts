import {NextAuthOptions} from 'next-auth';
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async signIn({profile}: any) {
            if (await prisma.whiteListUsers.findUnique({where: {email: profile?.email}}) !==
                null && profile?.email_verified as any) {
                return true;
            } else {
                return false;
            }
        }
    },
};
