import { cn } from "@/lib/utils";

type ProductPriceProps = {
  className?: string;
  value: number;
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
