import { useState } from "react";
import { QuantityButton } from "./QuantityButton";

import { IProduct } from "../@types";
import { priceFormmated } from "../utils";

interface CartProductProps {
  data: IProduct;
}

export function CartProduct({ data }: CartProductProps) {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setProductQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex gap-6">
      <img
        src={data.thumbnail}
        alt="Imagem do produto"
        className="h-24 w-24 rounded-lg"
      />

      <div className="flex flex-1 flex-col justify-between">
        <span className="text-base">{data.title}</span>

        <div className="flex items-center justify-between">
          <span className="text-base font-bold">
            {priceFormmated(data.price * productQuantity)}
          </span>
          <div className="flex items-center gap-4">
            <QuantityButton
              option="decrease"
              disabled={productQuantity === 1}
              onClick={handleDecreaseQuantity}
            />
            <span className="w-5 text-base font-bold">
              {productQuantity < 10 ? `0${productQuantity}` : productQuantity}
            </span>
            <QuantityButton
              option="increase"
              disabled={productQuantity === 20}
              onClick={handleIncreaseQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
