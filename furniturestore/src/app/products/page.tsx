"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react"; // <--- IMPORT Suspense
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";
import { Search, Filter } from "lucide-react";

const categories = [...new Set(products.map((p) => p.category))];

// Create a separate component that encapsulates the client-side logic
// that uses useSearchParams and other hooks.
// This is often cleaner than wrapping the entire page directly.
function ProductsContent() {
  const searchParams = useSearchParams(); // This is the hook causing the issue
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
    // This useEffect is also important for client-side state sync
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  return (
    <>
      {" "}
      {/* Use a fragment or div to wrap content */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our complete collection of premium furniture pieces
        </p>
      </div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {["all", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabClick(cat)}
            className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#82a6b1] text-white border-[#82a6b1] shadow-lg"
                : "bg-white text-gray-700 border-[#dedbd8] hover:border-[#82a6b1] hover:text-[#82a6b1]"
            }`}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-12 pr-4 py-4 border-2 border-[#dedbd8] rounded-full focus:outline-none focus:border-[#82a6b1] bg-white shadow-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* Results */}
      {filtered.length ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-[#dedbd8]">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No products found.</p>
            <p className="text-gray-500 text-sm mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// The main page component that wraps the client-side content in Suspense
export default function ProductsPageWrapper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede0d4] to-[#e6ccb2] pt-24">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductsContent /> {/* Render the actual client-side content */}
        </Suspense>
      </div>
    </div>
  );
}
