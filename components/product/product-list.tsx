import type { Product } from "@/types";
import ProductCard from "./product-card";

type DataProps = {
  data: Product[];
  title: string;
  limit?: number;
};
const ProductList = ({ title, data }: DataProps) => {
  if (data?.length === 0) {
    return (
      <div className="my-10" data-testid="no-products-found">
        <h2 className="h2-bold mb-4">{title}</h2>
        <p className="">No products found</p>
      </div>
    );
  }

  return (
    <div className="my-10" data-testid="product-list">
      <h2 className="h2-bold mb-4">{title}</h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        key=""
      >
        {data
          ?.filter((item) => item.images?.length > 0)
          ?.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
