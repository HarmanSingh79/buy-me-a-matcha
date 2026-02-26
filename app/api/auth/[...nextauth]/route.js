import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook"
import GitHubProvider from "next-auth/providers/github"
// import TwitterProvider from "next-auth/providers/twitter"
import User from "@/models/User"
import connectDB from "@/db/connectdb"

const authOptions = {
    secret: process.env.SECRET,

    providers: [
        // OAuth authentication providers
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // TwitterProvider({
        //     clientId: process.env.TWITTER_CLIENT_ID,
        //     clientSecret: process.env.TWITTER_CLIENT_SECRET,
        //     version: "2.0",
        //     authorization: {
        //         url: "https://twitter.com/i/oauth2/authorize",
        //         params: {
        //             scope: "users.read tweet.read offline.access",
        //         },
        //     },
        // }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            authorization: {
                params: { scope: 'openid profile email' },
            },
            issuer: 'https://www.linkedin.com/oauth',
            jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
            profile(profile, tokens) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ], callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // Handle user creation for all providers
            await connectDB();
            const currentUser = await User.findOne({ email: user.email })
            if (!currentUser) {
                await User.create({
                    email: user.email,
                    username: user.email.split("@")[0],
                    // profilepic: user.image,
                })
            }
            return true; // Allow sign in for all providers
        },

        async session({ session, user, token }) {
            await connectDB();
            const dbUser = await User.findOne({ email: session.user.email })
            session.user.name = dbUser.username
            return session
        },
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }