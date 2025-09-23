import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client/extension";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  console.log("🌱 Starting database seed...");

  // Create a default admin user
  const adminEmail = "admin@example.com";
  await prisma.user
    .delete({ where: { email: adminEmail } })
    .catch((err: any) => {
      console.log(`⚠️  Skipped admin user deletion: ${adminEmail} ${err}`);
    });

  const hashedPassword = await bcrypt.hash("password123", 10);

  const adminUser = await prisma.user.create({
    data: {
      email: adminEmail,
      password: hashedPassword,
    },
  });

  console.log(`✅ Created admin user: ${adminEmail}`);

  // Generate fake users with Faker.js
  const numberOfUsers = 10;
  const users = [];

  for (let i = 0; i < numberOfUsers; i++) {
    const email = faker.internet.email();
    const password = faker.internet.password();

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      users.push(user);
      console.log(`✅ Created user ${i + 1}/${numberOfUsers}: ${email}`);
    } catch (error) {
      console.log(`⚠️  Skipped duplicate email: ${email}, ${error}`);
    }
  }

  // Add admin user to the users array for note generation
  users.push(adminUser);

  // Generate fake notes for all users
  const notesPerUser = 5;
  let totalNotes = 0;

  for (const user of users) {
    for (let i = 0; i < notesPerUser; i++) {
      await prisma.note.create({
        data: {
          title: faker.lorem.sentence(4),
          body: faker.lorem.paragraphs(3, "\n\n"),
          userId: user.id,
        },
      });
      totalNotes++;
    }
  }

  console.log(`✅ Created ${totalNotes} notes for ${users.length} users`);
  console.log(`🌱 Database has been seeded successfully!`);
  console.log(`📧 Admin login: ${adminEmail} / password123`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
