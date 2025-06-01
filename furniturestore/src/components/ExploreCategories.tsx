import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/api/products/data";

const categories = [...new Set(products.map((p) => p.category))];

export default function ExploreCategories() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Explore Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={cat}
            href={`/products?category=${cat}`}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border text-center"
          >
            <Image
              src={`/images/${cat}s/${cat}${i + 1}.webp`}
              alt={cat}
              fill
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl capitalize font-semibold">{cat}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
