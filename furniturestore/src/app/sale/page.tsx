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
    <div className="min-h-screen bg-gradient-to-br from-[#ede0d4] to-[#e6ccb2] pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Products on Sale
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t miss out on these incredible deals - limited time offers
            on premium furniture
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <p className="text-gray-600">
            <span className="font-semibold text-[#82a6b1]">
              {sortedProducts.length}
            </span>{" "}
            products on sale
          </p>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-2 border-[#dedbd8] rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#82a6b1]"
            >
              <option value="default">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="discount">Highest Discount</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Sale Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6] rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Limited Time Sale!</h2>
          <p className="text-xl mb-6">
            Save up to 50% on selected furniture pieces
          </p>
          <p className="text-[#ede0d4]">
            Sale ends soon - don&apos;t miss out on these amazing deals!
          </p>
        </div>
      </div>
    </div>
  );
}
