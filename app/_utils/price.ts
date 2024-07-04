import { Item, Product } from "../_contexts/CartProvider";

export function priceFormatter(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(",", "");
}

export function calculateProductTotalPrice(item: Item): number {
  if (!item.product.discountPercentage) {
    return item.product.price * item.quantity;
  }
  return (
    item.product.price *
    (1 - item.product.discountPercentage / 100) *
    item.quantity
  );
}

export function calculateProductPrice(product: Product): number {
  if (!product.discountPercentage) {
    return product.price;
  }
  return product.price * (1 - product.discountPercentage / 100);
}
