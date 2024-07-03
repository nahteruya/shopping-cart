"use client";
import React, { useEffect, useMemo } from "react";
import { ReactNode, createContext, useState } from "react";
import { calculateProductPrice } from "../_helpers/price";

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage?: number;
}

interface Item {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartList: Item[];
  totalPriceCart: number;
  addItemToCart: (newItem: Item) => void;
  removeItemFromCart: (itemId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartList, setCartList] = useState<Item[]>(() => {
    const storedCart = window.localStorage.getItem(
      "@shopping-cart:cart-list-1.0.0",
    );
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "@shopping-cart:cart-list-1.0.0",
      JSON.stringify(cartList),
    );
  }, [cartList]);

  function addItemToCart(newItem: Item) {
    setCartList((prevCartList) => [...prevCartList, newItem]);
  }

  function removeItemFromCart(itemId: number) {
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
