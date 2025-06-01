"use client";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";

export default function FeaturedSection() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-5 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Handpicked pieces that represent the best of our collection
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
