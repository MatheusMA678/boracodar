import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import { IProducts } from "../@types";

const fetchProducts = (): Promise<IProducts> =>
  api.get("/products").then((res) => res.data);

export function getProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
