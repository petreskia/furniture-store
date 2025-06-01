"use client";

import { useShop } from "@/app/context/ShopContext";
import ProductCard from "@/components/ProductCard";

export default function CartPage() {
  const { cart, clearCart } = useShop();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <button onClick={clearCart} className="mb-4 text-sm text-red-500">
            Clear Cart
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cart.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
