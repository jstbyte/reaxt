import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.

/** @type { import('@prisma/client').PrismaClient } */
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

/******[ INSTRUCTIONS( prisma ) ]******/
// npx prisma init
// npx prisma migrate dev --name init
// npx prisma studio
