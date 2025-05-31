"use client";

import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md border bg-white transition hover:scale-[1.01]">
      <div className="relative w-full h-60">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="font-bold text-primary">${product.price}</span>
          <span
            className={`text-sm ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </span>
        </div>
      </div>
      <Link
        href={`/products/${product.id}`}
        className="inline-block mt-2 text-sm font-medium text-blue-600 hover:underline"
      >
        View Product
      </Link>
    </div>
  );
}
