import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Truck, Shield, RotateCcw } from "lucide-react";
// Import the specific product fetching utility
import { getProducts } from "@/utils/lib/get-products"; // If getProducts now handles single ID
// OR import { getProductById } from "@/utils/lib/get-product-by-id"; // If separate utility
import dynamicImport from "next/dynamic";
import { Product } from "@/app/api/products/types";
const ProductActions = dynamicImport(
  () => import("@/components/ProductActions"),
  {
    ssr: false,
  }
);

type Props = {
  params: { id: string };
};
export const dynamic = "force-static"; // Or 'auto', 'force-dynamic' depending on your needs
export const revalidate = false; // Or a number of seconds for ISR

export async function generateStaticParams() {
  const result = await getProducts(); // This fetches ALL products for generating paths
  const products: Product[] = Array.isArray(result)
    ? result
    : result
    ? [result]
    : [];
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetail({ params }: Props) {
  const id = Number(params.id); // This line is fine, params is synchronous.

  // 1. Fetch only the specific product for this page
  // This approach is more efficient if your data source allows fetching by ID.
  const product: Product | undefined = (await getProducts(id)) as
    | Product
    | undefined; // Use getProducts with ID
  // OR if you created a separate getProductById:
  // const product: Product | undefined = await getProductById(id);

  if (!product) return notFound();

  const hasDiscount =
    typeof product.discount === "number" && product.discount > 0;
  const finalPrice = hasDiscount
    ? product.price - product.price * ((product.discount ?? 0) / 100)
    : product.price;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede0d4] to-[#e6ccb2] pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-[#dedbd8]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {hasDiscount && (
                <div className="absolute top-6 left-6 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  {product.discount}% OFF
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-[#82a6b1]">
                ${finalPrice.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-2xl line-through text-gray-400">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#82a6b1] text-[#82a6b1]"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating})</span>
            </div>

            {/* Stock Status */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                product.stock > 0
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  product.stock > 0 ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <span className="font-medium">
                {product.stock > 0
                  ? `In Stock (${product.stock} available)`
                  : "Out of Stock"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <ProductActions product={product} />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#dedbd8]">
                <Truck className="w-6 h-6 text-[#82a6b1]" />
                <div>
                  <p className="font-semibold text-gray-800">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#dedbd8]">
                <Shield className="w-6 h-6 text-[#82a6b1]" />
                <div>
                  <p className="font-semibold text-gray-800">2 Year Warranty</p>
                  <p className="text-sm text-gray-600">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#dedbd8]">
                <RotateCcw className="w-6 h-6 text-[#82a6b1]" />
                <div>
                  <p className="font-semibold text-gray-800">30-Day Returns</p>
                  <p className="text-sm text-gray-600">Easy returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
