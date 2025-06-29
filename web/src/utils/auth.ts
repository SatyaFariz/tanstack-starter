import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthClient } from "better-auth/client"
import { db } from "db/connection";
import { admin } from "better-auth/plugins"
 
export const auth = betterAuth({
    emailAndPassword: {  
        enabled: true
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    plugins: [
        admin() 
    ]
});
 
export const client = createAuthClient({
    
})

export const { signIn, signUp, useSession } = createAuthClient()