import { ReactNode, useCallback, useReducer } from "react";
import { createContext } from 'use-context-selector';
import { addNewCartItemAction, CartItem, removeCartItemAction, updateCartItemQuantityAction } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cart: Cart;
  cartItemsQuantity: number;
  addNewCartItem: (newItem: CartItem) => void;
  removeCartItem: (itemId: number) => void;
  updateItemQuantity: (itemId: number, newQuantity: number) => void;
  resetCart: () => void;
}

export type Cart = CartItem[]

export const CartContext = createContext({} as CartContextType);


export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [])
  const cartItemsQuantity = cart.length
  // const [cartStored, setCartStored] = useLocalStorage<Cart>('@coffee-delivery-cart', []); Only for training

  const addNewCartItem = useCallback((newItem: CartItem) => {
    dispatch(
      addNewCartItemAction(newItem)
    )
  }, [])

  const removeCartItem = useCallback((itemId: number) => {
    dispatch(
      removeCartItemAction(itemId)
    )
  }, [])

  const updateItemQuantity = useCallback((itemId: number, newQuantity: number) => {
    dispatch(
      updateCartItemQuantityAction(itemId, newQuantity)
    )
  }, [])

  const resetCart = useCallback(() => {
    dispatch({
      type: "SET_CART",
      payload: {
        cart: []
      }
    })
  }, [])

  return (
    <CartContext.Provider value={{ cart, resetCart, cartItemsQuantity, addNewCartItem, removeCartItem, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  )
}