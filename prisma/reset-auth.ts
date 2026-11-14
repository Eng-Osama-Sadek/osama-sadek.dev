import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();
  console.log('✅ All old users, accounts, and sessions have been cleared.');
}
main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
