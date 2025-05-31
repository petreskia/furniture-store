import { products } from "@/app/api/products/data";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function ProductDetail({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-50">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <p className="text-lg font-semibold">${product.price}</p>
          <p
            className={`mt-2 ${
              product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}
