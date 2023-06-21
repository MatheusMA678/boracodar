import { X } from "@phosphor-icons/react";
import { IProducts } from "../@types";

interface CartHeaderProps {
  productsLength: number;
  handleCloseCart: () => void;
}

export function CartHeader({
  productsLength,
  handleCloseCart,
}: CartHeaderProps) {
  return (
    <section className="item-center flex justify-between border-b border-neutral-300 px-8 py-6">
      {productsLength === 0 ? (
        <h2 className="text-xl font-medium">Não tem nada aqui...</h2>
      ) : (
        <h2 className="text-xl font-medium">
          Seu carrinho tem{" "}
          <strong className="font-bold text-neutral-50">
            {productsLength > 1
              ? `${productsLength} itens`
              : `${productsLength} item`}
          </strong>
        </h2>
      )}

      <button
        className="flex h-6 w-6 items-center justify-center text-neutral-200"
        onClick={handleCloseCart}
      >
        <X />
      </button>
    </section>
  );
}
