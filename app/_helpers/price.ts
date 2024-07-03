import { Product } from "@prisma/client";

export function priceFormatter(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(",", "");
}

export function calculateProductPrice(product: Product): number {
  if (!product.discountPercentage) {
    return product.price;
  }
  return product.price * (1 - product.discountPercentage / 100);
}
