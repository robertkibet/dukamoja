import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes
 * @param inputs
 * @returns
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Converts a value to a plain object by serializing and deserializing it
 * @template T - The type of the value being converted
 * @param value - The value to convert
 * @returns - The plain object version of the value
 */
export const convertToPlainObject = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};

/**
 * Format number with decimal places
 */
export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimals] = num.toString().split(".");

  if (decimals) return `${int}.${decimals.padEnd(2, "0")}`;

  return `${int}.00`;
};
