import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/api/products/data";

const categories = [...new Set(products.map((p) => p.category))];

export default function ExploreCategories() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Explore Our Categories
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover furniture pieces that perfectly match your style and needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <Link
            key={cat}
            href={`/products?category=${cat}`}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative h-80">
              <Image
                src={`/images/${cat.toLowerCase()}/${cat.toLowerCase()}${
                  i + 1
                }.webp`}
                alt={cat}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white capitalize mb-2">
                {cat}
              </h3>
              <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore our {cat} collection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
