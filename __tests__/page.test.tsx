import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "@/app/(root)/page";
import ProductList from "@/components/product/product-list";

describe("HomePage", () => {
  test("Homepage contains product list", () => {
    render(<Homepage />);

    expect(screen.getByTestId("product-list")).toBeInTheDocument();
  });

  test("Product list without data shows a empty message", () => {
    render(<ProductList data={[]} title="" />);

    const productsList = screen.queryByTestId("products-list");
    const productsListNoResults = screen.getByTestId("no-products-found");

    expect(productsList).toBeNull();
    expect(productsListNoResults).toBeInTheDocument();
  });
});
