import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { getProducts } from "../hooks/useFetch";
import { priceFormmated } from "../utils";

export function SliderProducts() {
  const { data } = getProducts();

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {data?.products.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <div className="flex w-[200px] flex-col gap-4">
              <img
                src={product.thumbnail}
                alt="produto"
                className="h-32 w-full rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <span className="text-sm font-medium">
                  {priceFormmated(Number(product.price))}
                </span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
