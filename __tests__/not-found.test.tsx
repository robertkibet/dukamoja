import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "@/app/not-found";

describe("NotFoundPage", () => {
  test("Renders 404 content", () => {
    render(<NotFoundPage />);

    expect(screen.getByRole("heading", { name: /404/i })).toBeInTheDocument();
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
