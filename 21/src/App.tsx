import { Tag } from "@phosphor-icons/react";

import { CartHeader } from "./components/CartHeader";
import { CartProduct } from "./components/CartProduct";
// import { SliderProducts } from "./components/SliderProducts";
import { getProducts } from "./hooks/useFetch";

import { priceFormmated } from "./utils";
import { useState } from "react";

export default function App() {
  const [showCart, setShowCart] = useState(true);

  const { data } = getProducts();

  const totalPrice = data?.products.reduce(
    (acc, product) => product.price + acc,
    0
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* <section className="flex flex-col gap-12 p-12">
        <h1 className="text-4xl font-bold">Produtos</h1>
        <section className="w-full">
          <SliderProducts />
        </section>
      </section> */}

      <section
        className={`${
          showCart ? "flex" : "hidden"
        } fixed right-0 top-0 z-10 h-screen w-[428px] flex-col bg-neutral-400`}
      >
        <CartHeader
          productsLength={data?.products.length}
          handleCloseCart={() => {
            // setShowCart((prev) => !prev);
          }}
        />

        <section className="flex flex-1 flex-col gap-12 overflow-y-auto p-8">
          {data?.products.map((product) => {
            return <CartProduct key={product.id} data={product} />;
          })}
        </section>

        <section className="space-y-8 border-t border-neutral-300 p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-xl">
              <span className="font-medium">Total: </span>
              <span className="font-bold">{priceFormmated(totalPrice)}</span>
            </div>

            <button className="flex items-center gap-2 self-end text-base text-purple-500">
              <Tag />
              Adicionar cupom
            </button>
          </div>

          <button className="h-16 w-full rounded-lg bg-purple-600 text-lg text-neutral-50">
            Finalizar compra
          </button>
        </section>
      </section>
    </main>
  );
}
