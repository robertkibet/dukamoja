import { cn } from "@/lib/utils";
import type { Product } from "@/types";

type ProductPriceProps = {
  className?: string;
  value: Product["price"];
};
const ProductPrice = ({ className, value }: ProductPriceProps) => {
  const stringValue = Number(value).toFixed(2);

  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">KES</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
