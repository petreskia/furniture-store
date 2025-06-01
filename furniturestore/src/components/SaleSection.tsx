"use client";
import { products } from "@/app/api/products/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function SaleSection() {
  const saleProducts = products
    .filter((p) => p.discount && p.discount > 0)
    .slice(0, 4);

  return (
    <section className="py-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Limited Time Offers
          </h2>
          <p className="text-xl text-gray-600">
            Don&apos;t miss out on these amazing deals
          </p>
        </div>
        <Link
          href="/sale"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6] text-white font-semibold rounded-full hover:from-[#6b9aa6] hover:to-[#5a8a96] transition-all duration-300 shadow-lg"
        >
          View All Sales
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {saleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
