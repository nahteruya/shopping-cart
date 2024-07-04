"use client";

import Image from "next/image";

import { useContext } from "react";
import { CartContext, Product } from "../_contexts/CartProvider";

import { calculateProductPrice, priceFormatter } from "../_utils/price";
import { useRouter } from "next/navigation";

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  const { cartList, addItemToCart } = useContext(CartContext);
  const router = useRouter();

  function handleAddToCart() {
    const newItem = {
      product: product,
      quantity: 1,
    };
    addItemToCart(newItem);
    router.push("/cart");
  }

  return (
    <div className="flex h-96 w-full flex-col overflow-hidden rounded-lg shadow">
      <div className="flex w-full justify-center p-5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={236}
          height={160}
          className="object-contain"
          priority
        />
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div className="flex w-full flex-col gap-2 p-4">
        <h3 className="text-center text-lg font-bold text-pink">
          {product.name}
        </h3>
        <p className="text-xs">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex justify-start">
            <strong className="text-sm font-bold">
              {priceFormatter(calculateProductPrice(product))}
            </strong>
            {product.discountPercentage && (
              <span className="text-[10px] line-through">
                {priceFormatter(product.price)}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            {cartList.some((item) => item.product.id === product.id) ? (
              <span className="text-xs text-green">in cart</span>
            ) : (
              <button
                onClick={handleAddToCart}
                className="rounded bg-pink p-1 text-xs font-semibold text-gray-100"
              >
                add to cart +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
