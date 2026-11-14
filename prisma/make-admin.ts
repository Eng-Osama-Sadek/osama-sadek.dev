import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();

  if (users.length === 0) {
    console.log("❌ No users found. Please sign in with GitHub first.");
    return;
  }

  for (const user of users) {
    await prisma.user.update({
      where: { id: user.id },
      data: { isAdmin: true },
    });
    console.log(`✅ Admin granted to: ${user.email}`);
  }

  console.log("🎉 Done! All users are now admins.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());