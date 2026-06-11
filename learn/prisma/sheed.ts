import prisma from "@/app/lib/prisma/prisma";

async function main() {
  const sheed = await prisma.user.create({
    data: {
      username: "adamshao",
      email: 'test@gmail.com',
      password: "123456"
    },
  });
  console.log("Created Sheed:", sheed);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });   