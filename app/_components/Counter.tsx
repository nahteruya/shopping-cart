import { Minus, Plus } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CartContext } from "../_contexts/CartProvider";

interface CounterProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

export default function Counter({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: CounterProps) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={decreaseQuantity}>
        <Minus />
      </button>
      <span className="w-6 text-center">{quantity}</span>
      <button onClick={increaseQuantity}>
        <Plus />
      </button>
    </div>
  );
}
