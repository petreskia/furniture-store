// components/home/SaleSection.tsx
"use client";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function SaleSection() {
  const saleProducts = products
    .filter((p) => p.discount && p.discount > 0)
    .slice(0, 4);

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🔥 On Sale Now</h2>
        <Link href="/sale" className="text-sm text-blue-600 hover:underline">
          View All Sales →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {saleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
