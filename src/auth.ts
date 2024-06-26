import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter" 
import {db} from "@/lib/db"
export const { handlers, signIn, signOut, auth } = NextAuth({
    secret: process.env.AUTH_SECRET!,
    adapter:PrismaAdapter(db),
  providers: [Google],

 
})