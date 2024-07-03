"use client";
import React, { useMemo } from "react";
import { ReactNode, createContext, useState } from "react";
import { Product } from "@prisma/client";
import { calculateProductPrice } from "../_helpers/price";

interface Item {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartList: Item[];
  totalPriceCart: number;
  addItemToCart: (newItem: Item) => void;
  removeItemFromCart: (itemId: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartList, setCartList] = useState<Item[]>([]);

  function addItemToCart(newItem: Item) {
    setCartList((prevCartList) => [...prevCartList, newItem]);
  }

  function removeItemFromCart(itemId: string) {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.product.id !== itemId),
    );
  }

  const totalPriceCart = useMemo(() => {
    return cartList.reduce(
      (acc, item) =>
        (acc += calculateProductPrice(item.product) * item.quantity),
      0,
    );
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{ cartList, totalPriceCart, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
