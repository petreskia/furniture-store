"use client";

import { useShop } from "@/app/context/ShopContext";
import { Product } from "@/app/api/products/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaHeart,
  FaRegHeart,
  FaCartPlus,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, removeFromCart, favoritesToggle, cart, favorites } =
    useShop();
  const router = useRouter();

  const isInCart = cart.some((item) => item.id === product.id);
  const isFavorite = favorites.some((item) => item.id === product.id);
  const inStock = product.stock > 0;
  const hasDiscount = product.discount && product.discount > 0;
  const finalPrice = hasDiscount
    ? product.price - product.price * (product.discount / 100)
    : product.price;

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative border p-4 rounded shadow-sm hover:shadow-md cursor-pointer transition-all"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={100}
        className="w-full h-70 object-cover mb-3 rounded"
      />
      {product.discount > 0 && (
        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">
          {product.discount}% OFF
        </span>
      )}
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <div className="flex items-center justify-between text-sm mt-1">
        <span className="font-medium text-gray-800">
          ${finalPrice.toFixed(2)}
        </span>
        {hasDiscount && (
          <span className="line-through text-gray-400 text-xs ml-2">
            ${product.price.toFixed(2)}
          </span>
        )}

        <span
          className={`flex items-center gap-1 text-xs font-medium ${
            inStock ? "text-green-600" : "text-red-500"
          }`}
        >
          {inStock ? <FaCheckCircle /> : <FaTimesCircle />}
          {inStock ? "In stock" : "Out of stock"}
        </span>
      </div>

      <div className="text-yellow-500 text-sm mt-1">
        {"★".repeat(Math.floor(product.rating)) +
          (product.rating % 1 >= 0.5 ? "½" : "")}
      </div>

      {/* Action icons */}
      <div
        className="absolute top-2 right-2 flex gap-2 z-10"
        onClick={(e) => e.stopPropagation()} // Prevent card click
      >
        <button
          onClick={() => favoritesToggle(product)}
          className="text-red-500 text-xl"
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
        <button
          onClick={() =>
            isInCart ? removeFromCart(product.id) : addToCart(product)
          }
          className="text-blue-600 text-xl"
        >
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
}
