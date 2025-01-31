import type sampleData from "@/data/sample-data";
import ProductCard from "./product-card";

type DataProps = {
  data: typeof sampleData.products;
  title: string;
  limit?: number;
};
const ProductList = ({ title, data, limit }: DataProps) => {
  if (data?.length === 0) {
    return (
      <div className="my-10" data-testid="no-products-found">
        <h2 className="h2-bold mb-4">{title}</h2>
        <p className="">No products found</p>
      </div>
    );
  }

  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10" data-testid="product-list">
      <h2 className="h2-bold mb-4">{title}</h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        key=""
      >
        {limitedData
          ?.filter((item) => item.images?.length > 0)
          ?.map((item, index) => (
            <ProductCard product={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
