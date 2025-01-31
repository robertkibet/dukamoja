import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return <ProductList data={latestProducts} title="Newest Arrivals" />;
};

export default Homepage;
