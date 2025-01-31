"use client";

import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen "
      data-testid="not-found-page"
    >
      <Image
        src={APP_LOGO}
        width={48}
        height={48}
        alt={`${APP_NAME}`}
        priority
      />
      <div className="sm:w-full p-6 md:w-1/3 rounded-large shadow-md text-center  ">
        <h1 className="text-3xl font-bold mb-4">404! Not found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
