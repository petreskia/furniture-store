"use client";

import { useShop } from "@/app/context/ShopContext";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, clearCart, removeFromCart, updateQuantity } = useShop();

  const total = cart.reduce((sum, item) => {
    const finalPrice =
      item.discount > 0
        ? item.price - item.price * (item.discount / 100)
        : item.price;
    return sum + finalPrice * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-[#dedbd8]">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6] text-white font-semibold rounded-full hover:from-[#6b9aa6] hover:to-[#5a8a96] transition-all duration-300 shadow-lg"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede0d4] to-[#e6ccb2] pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Your Cart ({cart.length})
              </h1>
              <button
                onClick={clearCart}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            </div>

            <div className="space-y-6">
              {cart.map((item) => {
                const finalPrice =
                  item.discount > 0
                    ? item.price - item.price * (item.discount / 100)
                    : item.price;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-[#dedbd8]"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-[#82a6b1]">
                            ${finalPrice.toFixed(2)}
                          </span>
                          {item.discount > 0 && (
                            <span className="text-lg line-through text-gray-400">
                              ${item.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="p-2 rounded-full bg-[#ede0d4] hover:bg-[#e6ccb2] transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-lg font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 rounded-full bg-[#ede0d4] hover:bg-[#e6ccb2] transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#dedbd8] sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-[#dedbd8] pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-[#82a6b1]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6] text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-[#6b9aa6] hover:to-[#5a8a96] transition-all duration-300 shadow-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
