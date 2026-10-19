import { authClient } from "../auth";

export { authClient };

export interface NeonAuthUser {
    id: string;
    email: string;
    name?: string;
    role?: string;
    emailVerified?: boolean;
}

export interface NeonAuthSession {
    token: string;
    user: NeonAuthUser;
}

export const neonAuth = {
    // Sign up a new user via Neon Managed Better Auth
    async signUp(params: { email: string; password: string; name: string }) {
        const result = await authClient.signUp.email({
            email: params.email,
            password: params.password,
            name: params.name,
        });
        if (result.error) {
            throw new Error(result.error.message || "Failed to create account");
        }
        return {
            user: result.data?.user as NeonAuthUser,
            token: ((result.data as any)?.token || (result.data as any)?.session?.token || "") as string,
        };
    },

    // Sign in existing user via Neon Managed Better Auth
    async signIn(params: { email: string; password: string }) {
        const result = await authClient.signIn.email({
            email: params.email,
            password: params.password,
        });
        if (result.error) {
            throw new Error(result.error.message || "Invalid credentials");
        }
        return {
            user: result.data?.user as NeonAuthUser,
            token: ((result.data as any)?.token || (result.data as any)?.session?.token || "") as string,
        };
    },

    // Get current active session from Neon Auth
    async getSession() {
        const result = await authClient.getSession();
        if (!result.data?.user) return null;
        return {
            user: result.data.user as NeonAuthUser,
            token: result.data.session?.token as string,
        };
    },

    // Sign out current user from Neon Auth
    async signOut() {
        await authClient.signOut();
    },

    // Retrieve fresh session token
    async getToken(): Promise<string | null> {
        const result = await authClient.getSession();
        return result.data?.session?.token || null;
    },
};
