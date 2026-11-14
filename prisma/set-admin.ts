import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'osamasadekadam321@gmail.com' },
    create: {
      email: 'osamasadekadam321@gmail.com',
      isAdmin: true,
    },
    update: { isAdmin: true },
  });
  console.log('✅ User upgraded to admin:', admin.email);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
