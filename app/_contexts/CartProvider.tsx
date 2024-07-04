"use client";

import React, {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useReducer,
  useMemo,
} from "react";

import {
  addItemToCartAction,
  cartReducer,
  decreaseProductQuantityAction,
  increaseProductQuantityAction,
  removeItemFromCartAction,
} from "../_reducers/cart";

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage?: number;
}

export interface Item {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartList: Item[];
  addItemToCart: (newItem: Item) => void;
  removeItemFromCart: (itemId: number) => void;
  decreaseProductQuantity: (itemId: number) => void;
  increaseProductQuantity: (itemId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartListState, dispatch] = useReducer(
    cartReducer,
    { cartList: [] },
    (cartListState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@shopping-cart:cart-list-1.0.0",
      );

      if (storedStateAsJSON) {
        return {
          cartList: JSON.parse(storedStateAsJSON),
        };
      }

      return cartListState;
    },
  );

  const { cartList } = cartListState;

  useEffect(() => {
    localStorage.setItem(
      "@shopping-cart:cart-list-1.0.0",
      JSON.stringify(cartList),
    );
  }, [cartList]);

  function addItemToCart(newItem: Item) {
    dispatch(addItemToCartAction(newItem));
  }

  function removeItemFromCart(itemId: number) {
    dispatch(removeItemFromCartAction(itemId));
  }

  function decreaseProductQuantity(itemId: number) {
    dispatch(decreaseProductQuantityAction(itemId));
  }

  function increaseProductQuantity(itemId: number) {
    dispatch(increaseProductQuantityAction(itemId));
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItemToCart,
        removeItemFromCart,
        decreaseProductQuantity,
        increaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
