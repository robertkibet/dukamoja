"use client";

import ProductList from "@/components/product/product-list";
import sampleData from "@/data/sample-data";

const Homepage = () => {
  return (
    <ProductList
      data={sampleData.products}
      limit={undefined}
      title="Newest Arrivals"
    />
  );
};

export default Homepage;
