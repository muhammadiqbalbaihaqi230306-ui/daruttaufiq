import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const getPrismaClient = () => {
  if (globalForPrisma.prisma && "registration" in globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }
  const client = new PrismaClient();
  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }
  return client;
};

export const prisma = getPrismaClient();
