import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { JWT } from "next-auth/jwt";

// Explicitly disable static optimization for this API route
export const dynamic = "force-dynamic";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email });

        if (!user || !user.password) {
          throw new Error("No user found");
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    // Handle JWT to include additional user information
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store user ID in the token
        token.email = user.email; // Store user email in the token
        token.name = user.name; // Store user name in the token
        token.role = user.role; // Store user role in the token
        token.image = user.image; // Store user image in the token
      }
      return token;
    },

    // Handle session to include additional user information
    async session({ session, token }: { session: any; token: JWT }) {
      if (session?.user) {
        session.user.id = token.id; // Add user ID to session
        session.user.email = token.email; // Add user email to session
        session.user.name = token.name; // Add user name to session
        session.user.role = token.role; // Add user role to session
        session.user.image = token.image; // Add user image to session
      }
      return session;
    },

    // SignIn logic to handle new users from Google sign in
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await connectDB();

          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            await User.create({
              email: user.email,
              name: user.name,
              image: user.image,
              emailVerified: new Date(),
            });
          }

          return true;
        } catch (error) {
          console.error("Error saving user", error);
          return false;
        }
      }

      return true;
    },
  },
  pages: {
    signIn: "/auth/signin", // Customize sign in page if necessary
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
});

export { handler as GET, handler as POST };
