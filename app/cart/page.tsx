"use client";

import Header from "../_components/Header";

import { useContext, useMemo } from "react";
import { CartContext } from "../_contexts/CartProvider";

import { calculateProductPrice, priceFormatter } from "../_utils/price";
import QuantityInput from "../_components/Counter";

export default function Cart() {
  const {
    cartList,
    removeItemFromCart,
    decreaseProductQuantity,
    increaseProductQuantity,
  } = useContext(CartContext);

  function handleRemoveItem(itemId: number) {
    removeItemFromCart(itemId);
  }

  const totalPriceCart = useMemo(() => {
    return cartList.reduce(
      (acc, item) =>
        (acc += calculateProductPrice(item.product) * item.quantity),
      0,
    );
  }, [cartList]);

  return (
    <main>
      <Header />
      <div className="relative top-14 mx-auto w-full max-w-6xl px-4 pt-10">
        <table className="w-full table-fixed border-collapse rounded-lg bg-white">
          <thead>
            <tr className="border-b-[1px] border-solid border-b-gray-300">
              <th className="w-auto p-4 text-left">Product</th>
              <th className="w-35 p-4 text-center sm:w-40">Quantity</th>
              <th colSpan={2} className="w-35 p-4 text-center sm:w-40">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item) => (
              <tr
                key={item.product.id}
                className="border-b-[1px] border-solid border-b-gray-300"
              >
                <td className="p-4">{item.product.name}</td>
                <td className="flex justify-center p-4">
                  <QuantityInput
                    quantity={item.quantity}
                    decreaseQuantity={() =>
                      decreaseProductQuantity(item.product.id)
                    }
                    increaseQuantity={() =>
                      increaseProductQuantity(item.product.id)
                    }
                  />
                </td>
                <td className="p-4 text-center">
                  {priceFormatter(calculateProductPrice(item.product))}
                </td>
                <td className="p-4 text-right text-pink">
                  <button onClick={() => handleRemoveItem(item.product.id)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cartList.length === 0 ? (
          <div className="flex justify-center p-4">Your cart is empty</div>
        ) : (
          <div className="flex justify-end p-4">
            <span>
              Total: <strong>{priceFormatter(totalPriceCart)}</strong>
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
