"use client";

import { useState } from "react";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesQuery =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-30 space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded px-4 py-2 w-full sm:max-w-xs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="border rounded px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat[0].toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
