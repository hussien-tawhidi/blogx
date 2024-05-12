import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import client from "./libs/prismadb";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }: any) {
      session.user.id = token.id;
      return session;
    },
  },
  // adapter: PrismaAdapter(prisma),
  adapter: MongoDBAdapter(clientPromise),
});
