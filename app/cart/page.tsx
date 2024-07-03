"use client";
import { useContext } from "react";
import Header from "../_components/Header";
import { CartContext } from "../_contexts/CartProvider";
import { calculateProductPrice, priceFormatter } from "../_helpers/price";

export default function Cart() {
  const { cartList, totalPriceCart, removeItemFromCart } =
    useContext(CartContext);

  function handleRemoveItem(itemId: number) {
    removeItemFromCart(itemId);
  }

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
                <td className="p-4 text-center">{item.quantity}</td>
                <td className="p-4 text-center">
                  {priceFormatter(calculateProductPrice(item.product))}
                </td>
                <td className="text-pink p-4 text-right">
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
