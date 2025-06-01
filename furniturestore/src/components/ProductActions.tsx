"use client";

import { useShop } from "@/app/context/ShopContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import type { Product } from "@/app/api/products/types";

export default function ProductActions({ product }: { product: Product }) {
  const { addToCart, removeFromCart, favoritesToggle, cart, favorites } =
    useShop();

  const isInCart = cart.some((item) => item.id === product.id);
  const isFavorite = favorites.some((item) => item.id === product.id);
  const inStock = product.stock > 0;

  return (
    <div className="space-y-4">
      <button
        disabled={!inStock}
        onClick={() => {
          isInCart ? removeFromCart(product.id) : addToCart(product);
        }}
        className="w-full bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6] text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-[#6b9aa6] hover:to-[#5a8a96] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>

      <button
        onClick={() => favoritesToggle(product)}
        className="w-full bg-white text-[#82a6b1] py-4 px-8 rounded-full font-semibold text-lg border-2 border-[#82a6b1] hover:bg-[#82a6b1] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
      >
        {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
