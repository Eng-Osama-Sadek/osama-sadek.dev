// READ-ONLY diagnostic: changes nothing in the database.
// Run: npx tsx prisma/check-admin.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    include: { accounts: { select: { provider: true, providerAccountId: true } } },
  });
  const projects = await prisma.project.count();
  console.log(`Users: ${users.length} | Projects: ${projects}`);
  for (const u of users) {
    console.log(
      `- ${u.email} | isAdmin=${u.isAdmin} | linked accounts: ` +
        (u.accounts.map((a) => a.provider).join(', ') || 'NONE')
    );
  }
  if (users.length === 0) console.log('No users: run  npx prisma db seed');
  else if (!users.some((u) => u.isAdmin)) console.log('No admin user: run  npx tsx prisma/set-admin.ts');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
