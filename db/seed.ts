import sampleData from "@/data/sample-data";
import { PrismaClient } from "@prisma/client";

export const seeder = async () => {
  const prisma = new PrismaClient();

  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Products database seeded successfuly");
};

seeder();
