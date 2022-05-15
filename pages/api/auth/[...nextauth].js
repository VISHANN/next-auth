import NextAuth from 'next-auth'
import GoogleProviders from 'next-auth/providers/google'

export default NextAuth({
  // Configure more providers here
  providers: [
      GoogleProviders({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      })
  ],
  callbacks: {
    async jwt({token, account}){
      if(account){
        token.accessToken = account.access_token
      }
      return token;
    }
  }
})
