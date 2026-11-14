import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // حذف الحسابات أولاً (لأنها مرتبطة بالمستخدمين والجلسات)
  await prisma.account.deleteMany();
  // حذف الجلسات
  await prisma.session.deleteMany();
  // حذف المستخدمين
  await prisma.user.deleteMany();
  console.log('✅ All users, accounts, and sessions have been cleared.');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());