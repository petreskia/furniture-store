"use client";
import { useState } from "react";
import type React from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Stay Updated with Our Latest Collections
        </h2>
        <p className="text-xl text-[#ede0d4] mb-8 max-w-2xl mx-auto">
          Be the first to know about new arrivals, exclusive deals, and design
          inspiration
        </p>

        {!isSubscribed ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 border border-[#dedbd8]"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-[#82a6b1] font-semibold rounded-full hover:bg-[#ede0d4] transition-colors duration-300 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/30">
            <svg
              className="w-12 h-12 text-white mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-white font-semibold">
              Thank you for subscribing!
            </p>
            <p className="text-[#ede0d4] text-sm mt-2">
              You&apos;ll receive our latest updates soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
