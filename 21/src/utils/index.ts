export const priceFormmated = (item: number) =>
  Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(item);
