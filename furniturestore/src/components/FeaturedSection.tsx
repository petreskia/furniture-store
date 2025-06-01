// components/home/FeaturedSection.tsx
"use client";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";

export default function FeaturedSection() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4">🌟 Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
