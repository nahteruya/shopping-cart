import { Item } from "../_contexts/CartProvider";

enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  INCREASE_PRODUCT_QUANTITY = "INCREASE_PRODUCT_QUANTITY",
  DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY",
}

interface CartState {
  cartList: Item[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return {
        cartList: [...state.cartList, action.payload.newItem],
      };
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        cartList: state.cartList.filter(
          (item) => item.product.id !== action.payload.itemId,
        ),
      };
    case ActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        cartList: state.cartList.map((item) => {
          if (item.product.id === action.payload.itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case ActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        cartList: state.cartList.map((item) => {
          if (item.product.id === action.payload.itemId) {
            if (item.quantity > 0) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return { ...item, quantity: 0 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}

export function addItemToCartAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    },
  };
}

export function removeItemFromCartAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { itemId },
  };
}

export function increaseProductQuantityAction(itemId: number) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: { itemId },
  };
}

export function decreaseProductQuantityAction(itemId: number) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: { itemId },
  };
}
