export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Dukamoja";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Your complete modern ecommerce store";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const APP_LOGO =
  process.env.NODE_ENV === "development"
    ? "https://storage.googleapis.com/cors-free/applications/projects/dukamoja/dev/images/logo.svg"
    : "https://storage.googleapis.com/cors-free/applications/projects/dukamoja/prod/images/logo.svg";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
