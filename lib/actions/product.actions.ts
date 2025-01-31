"use server";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";

/**
 * Fetches latest products from prisma
 * @param limit - results limit
 * @returns
 */
export const getLatestProducts = async (limit = LATEST_PRODUCTS_LIMIT) => {
  const data = await prisma.product.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data);
};
