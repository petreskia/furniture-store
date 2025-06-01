"use client";

import { useState } from "react";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";

export default function SalePage() {
  const discounted = products.filter((p) => p.discount && p.discount > 0);

  const [sort, setSort] = useState("default");

  const sortedProducts = [...discounted].sort((a, b) => {
    switch (sort) {
      case "priceLow":
        return (
          a.price -
          a.price * (a.discount / 100) -
          (b.price - b.price * (b.discount / 100))
        );
      case "priceHigh":
        return (
          b.price -
          b.price * (b.discount / 100) -
          (a.price - a.price * (a.discount / 100))
        );
      case "discount":
        return (b.discount ?? 0) - (a.discount ?? 0);
      default:
        return 0;
    }
  });

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛍️ Products on Sale</h1>

      <div className="mb-4 flex gap-2 items-center">
        <label className="text-sm">Sort by:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-1 text-sm"
        >
          <option value="default">Default</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="discount">Highest Discount</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
