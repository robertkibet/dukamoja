import sampleData from "@/data/sample-data";
import { PrismaClient } from "@prisma/client";

/**
 * Seed db with sample data
 */
export const seeder = async () => {
  const prisma = new PrismaClient();

  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Products database seeded successfuly");
};

seeder();
