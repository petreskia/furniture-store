"use client";

import { useShop } from "@/app/context/ShopContext";
import ProductCard from "@/components/ProductCard";
import { Heart, Trash2 } from "lucide-react";

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useShop();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#ede0d4] to-[#e6ccb2] pt-24">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-[#dedbd8]">
            <Heart className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              No Favorites Yet
            </h1>
            <p className="text-gray-600 mb-8">
              Start adding products to your favorites to see them here.
            </p>
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6] text-white font-semibold rounded-full hover:from-[#6b9aa6] hover:to-[#5a8a96] transition-all duration-300 shadow-lg"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede0d4] to-[#e6ccb2] pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Your Favorites
            </h1>
            <p className="text-xl text-gray-600">
              You have{" "}
              <span className="font-semibold text-[#82a6b1]">
                {favorites.length}
              </span>{" "}
              favorite items
            </p>
          </div>
          <button
            onClick={clearFavorites}
            className="flex items-center gap-2 px-6 py-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-all duration-300 border border-red-200"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Favorites Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-[#dedbd8]">
          <div className="text-center">
            <Heart className="w-12 h-12 text-[#82a6b1] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Love These Pieces?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Your favorite items are saved here for easy access. Add them to
              your cart when you&apos;re ready to make them yours!
            </p>
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6] text-white font-semibold rounded-full hover:from-[#6b9aa6] hover:to-[#5a8a96] transition-all duration-300 shadow-lg"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
