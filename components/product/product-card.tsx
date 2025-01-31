import type sampleData from "@/db/data/sample-data";
import { Card, CardHeader, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./product-price";

type Product = {
  product: (typeof sampleData.products)[0];
};
const ProductCard = ({ product }: Product) => {
  const { name, brand, slug, rating, stock, price } = product;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            height={300}
            width={300}
            alt={product.description}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{brand}</div>
        <Link href={`/product/${slug}`}>
          <h2 className="text-sm font-medium">{name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{rating} stars</p>
          {stock > 0 ? (
            <ProductPrice value={price} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
