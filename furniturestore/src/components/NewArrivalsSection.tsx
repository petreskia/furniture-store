"use client";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";

export default function NewArrivalsSection() {
  const newArrivals = products.filter((p) => p.newArival).slice(0, 4);

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Fresh designs that just landed in our showroom
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
