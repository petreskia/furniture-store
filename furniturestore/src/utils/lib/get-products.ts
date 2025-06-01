// @/utils/lib/get-products.ts
// (Assuming your products data is an array in a JSON file or similar)

import { products } from "@/app/api/products/data";
import { Product } from "@/app/api/products/types";

// This function now supports fetching all products OR a single product by ID
export async function getProducts(
  id?: number
): Promise<Product[] | Product | undefined> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (id !== undefined) {
    return (products as Product[]).find((p) => p.id === id);
  }
  return products as Product[];
}
