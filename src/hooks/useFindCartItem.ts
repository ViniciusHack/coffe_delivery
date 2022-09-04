import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "../contexts/CartContext";


export function useFindCartItem() {
  const cart = useContextSelector(CartContext, (context) => {
    return context.cart
  });

  const findCartItem = useCallback((itemId: number) => {
    const cartItem = cart.find(item => item.id === itemId);

    return { cartItem, itemAlreadyExists: !!cartItem}
  }, [cart])

  return { findCartItem };
}