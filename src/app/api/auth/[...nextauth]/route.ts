import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '89991984868-vp71iosjrsvij05o60s8kvke6jqbuccu.apps.googleusercontent.com' ?? "",
      clientSecret: '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' ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };