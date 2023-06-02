import { PrismaClient } from "@prisma/client";

let prisma;

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient();
}

prisma = globalThis.prisma;

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
