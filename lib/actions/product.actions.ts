"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

/**
 * Fetches latest products from prisma
 * @param limit - results limit
 * @returns
 */
export const getLatestProducts = async (limit = LATEST_PRODUCTS_LIMIT) => {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data);
};
