"use client";

import { useShop } from "@/app/context/ShopContext";
import type { Product } from "@/app/api/products/types";
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
  const hasDiscount = product.discount > 0;
  const finalPrice = hasDiscount
    ? product.price - product.price * ((product.discount ?? 0) / 100)
    : product.price;

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-[#dedbd8]"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.discount}% OFF
          </div>
        )}

        {/* Action Buttons */}
        <div
          className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => favoritesToggle(product)}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-[#ede0d4] transition-colors"
          >
            {isFavorite ? (
              <FaHeart className="w-4 h-4 text-red-500" />
            ) : (
              <FaRegHeart className="w-4 h-4 text-gray-600" />
            )}
          </button>
          <button
            onClick={() =>
              isInCart ? removeFromCart(product.id) : addToCart(product)
            }
            className="p-2 bg-white rounded-full shadow-lg hover:bg-[#ede0d4] transition-colors"
          >
            <FaCartPlus className="w-4 h-4 text-[#82a6b1]" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-[#82a6b1]">
            ${finalPrice.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-lg line-through text-gray-400">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-[#82a6b1]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-current"
                    : "fill-gray-300"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2">
          {inStock ? (
            <>
              <FaCheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">
                In Stock
              </span>
            </>
          ) : (
            <>
              <FaTimesCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">
                Out of Stock
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
