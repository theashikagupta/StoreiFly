import { prisma } from "../config/prisma.js";

export interface NeonUserRecord {
    id: string;
    name: string | null;
    email: string;
    role: string | null;
    createdAt?: Date | null;
}

export interface NeonSessionRecord {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
}

// Finds a user from neon_auth.user by ID (UUID) or email
export const findNeonUser = async (filter: { id?: string; email?: string }): Promise<NeonUserRecord | null> => {
    try {
        if (filter.id) {
            const rows = await prisma.$queryRaw<NeonUserRecord[]>`
                SELECT id, name, email, role, "createdAt" as "createdAt"
                FROM neon_auth.user 
                WHERE id = ${filter.id}::uuid 
                LIMIT 1
            `;
            return rows[0] || null;
        }
        if (filter.email) {
            const rows = await prisma.$queryRaw<NeonUserRecord[]>`
                SELECT id, name, email, role, "createdAt" as "createdAt"
                FROM neon_auth.user 
                WHERE LOWER(email) = ${filter.email.trim().toLowerCase()} 
                LIMIT 1
            `;
            return rows[0] || null;
        }
    } catch (e) {
        console.error(e);
    }
    return null;
};

// Finds a valid active session from neon_auth.session
export const findNeonSession = async (token: string): Promise<NeonSessionRecord | null> => {
    try {
        const rows = await prisma.$queryRaw<NeonSessionRecord[]>`
            SELECT id, "userId", "expiresAt", token 
            FROM neon_auth.session 
            WHERE token = ${token} AND "expiresAt" > NOW() 
            LIMIT 1
        `;
        return rows[0] || null;
    } catch (e) {
        console.error(e);
    }
    return null;
};

// Updates role on neon_auth.user (never overwrites or alters an admin user)
export const updateNeonUserRole = async (userId: string, role: string): Promise<void> => {
    try {
        await prisma.$executeRaw`
            UPDATE neon_auth.user 
            SET role = ${role}, "updatedAt" = NOW() 
            WHERE id = ${userId}::uuid AND (role IS NULL OR role != 'admin')
        `;
    } catch (e) {
        console.error(e);
    }
};

// Counts merchants in neon_auth.user
export const countNeonMerchants = async (): Promise<number> => {
    try {
        const rows = await prisma.$queryRaw<Array<{ count: bigint }>>`
            SELECT COUNT(*) as count 
            FROM neon_auth.user 
            WHERE role = 'merchant'
        `;
        return Number(rows[0]?.count || 0);
    } catch (e) {
        console.error(e);
        return 0;
    }
};

// Finds all merchants in neon_auth.user
export const findNeonMerchants = async (): Promise<NeonUserRecord[]> => {
    try {
        return await prisma.$queryRaw<NeonUserRecord[]>`
            SELECT id, name, email, role, "createdAt" as "createdAt" 
            FROM neon_auth.user 
            WHERE role = 'merchant' 
            ORDER BY "createdAt" DESC
        `;
    } catch (e) {
        console.error(e);
        return [];
    }
};

// Maps a list of user IDs to user records for efficient joining
export const findNeonUsersByIds = async (ids: string[]): Promise<Record<string, NeonUserRecord>> => {
    if (!ids || ids.length === 0) return {};
    try {
        const uniqueIds = Array.from(new Set(ids.filter(Boolean)));
        const rows = await prisma.$queryRaw<NeonUserRecord[]>`
            SELECT id, name, email, role, "createdAt" as "createdAt"
            FROM neon_auth.user
            WHERE id::text = ANY(${uniqueIds})
        `;
        const map: Record<string, NeonUserRecord> = {};
        for (const row of rows) {
            map[row.id] = row;
        }
        return map;
    } catch (e) {
        console.error(e);
        return {};
    }
};

// Seeds a user directly into neon_auth.user and returns their UUID
export const seedNeonUser = async (user: { name: string; email: string; role: string }): Promise<string> => {
    const existing = await findNeonUser({ email: user.email });
    if (existing) {
        return existing.id;
    }

    const inserted = await prisma.$queryRaw<Array<{ id: string }>>`
        INSERT INTO neon_auth.user (id, name, email, role, "emailVerified", "createdAt", "updatedAt")
        VALUES (gen_random_uuid(), ${user.name}, ${user.email.toLowerCase()}, ${user.role}, true, NOW(), NOW())
        RETURNING id
    `;
    return inserted[0].id;
};
