"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useShop } from "@/app/context/ShopContext";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { cn } from "@/utils/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cart, favorites } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 lg:left-50 lg:right-50 xl:left-1/5 xl:right-1/5 rounded-2xl z-50 transition-all duration-300 backdrop-blur-lg shadow-lg border border-white/20",
        scrolled ? "bg-transparent backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-[#c3a995] text-xl lg:text-2xl font-bold">
                Aluma Furniture
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={cn(
                "text-[#8a7968] hover:text-[#c3a995] transition-colors px-3 py-2 text-sm font-medium",
                isActive("/") && "text-[#c3a995] font-semibold"
              )}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={cn(
                "text-[#8a7968] hover:text-[#c3a995] transition-colors px-3 py-2 text-sm font-medium",
                isActive("/products") && "text-[#c3a995] font-semibold"
              )}
            >
              Products
            </Link>
            <Link
              href="/sale"
              className={cn(
                "text-[#8a7968] hover:text-[#c3a995] transition-colors px-3 py-2 text-sm font-medium",
                isActive("/sale") && "text-[#c3a995] font-semibold"
              )}
            >
              Sale
            </Link>
          </div>

          {/* Cart and Favorites */}
          <div className="flex items-center gap-4">
            <Link
              href="/favorites"
              className="flex items-center gap-2 text-[#8a7968] hover:text-[#c3a995] transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Favorites ({favorites.length})
              </span>
              <span className="sm:hidden bg-[#c3a995] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites.length}
              </span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 text-[#8a7968] hover:text-[#c3a995] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Cart ({cart.length})
              </span>
              <span className="sm:hidden bg-[#c3a995] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#c3a995] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ede0d4]/95 backdrop-blur-md rounded-b-2xl border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className={cn(
                "text-gray-700 hover:text-[#c3a995] block px-3 py-2 text-base font-medium rounded-lg",
                isActive("/") && "text-[#c3a995] bg-white/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={cn(
                "text-gray-700 hover:text-[#c3a995] block px-3 py-2 text-base font-medium rounded-lg",
                isActive("/products") && "text-[#c3a995] bg-white/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/sale"
              className={cn(
                "text-gray-700 hover:text-[#c3a995] block px-3 py-2 text-base font-medium rounded-lg",
                isActive("/sale") && "text-[#c3a995] bg-white/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sale
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
