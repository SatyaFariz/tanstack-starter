import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "db/connection";
import { admin } from "better-auth/plugins"
import { reactStartCookies } from "better-auth/react-start";
 
export const auth = betterAuth({
    emailAndPassword: {  
        enabled: true
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    plugins: [
        admin(),
        reactStartCookies()
    ]
});