"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";

const categories = [...new Set(products.map((p) => p.category))];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;

    const matchesQuery =
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  const handleTabClick = (cat: string) => {
    setActiveCategory(cat);
    router.push(`/products${cat !== "all" ? `?category=${cat}` : ""}`);
  };

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-2 mb-6">
        {["all", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabClick(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="w-full max-w-md border px-4 py-2 mb-6 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}
