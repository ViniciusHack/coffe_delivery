import { ReactNode, useCallback, useEffect, useReducer } from "react";
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
  findItem: (itemId: number) => CartItem | undefined;
}

export type Cart = CartItem[]

export const CartContext = createContext({} as CartContextType);


export function CartProvider({ children }: CartProviderProps) {
  // TO DO: Contexto de dados da entrega, pagamento, tempo estimado?
  
  const [cart, dispatch] = useReducer(cartReducer, [])
  const cartItemsQuantity = cart.length

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

  const findItem = useCallback((id: number) => {
    return cart.find(item => item.id === id);
  }, [cart])

  useEffect(() => {
    cartItemsQuantity > 0 && localStorage.setItem("@coffee-express-cart", JSON.stringify(cart));
  }, [cart])

  useEffect(() => {
    const previousSessionCartString = localStorage.getItem("@coffee-express-cart");
    if(!previousSessionCartString) return;
    
    const previousSessionCart:Cart = JSON.parse(previousSessionCartString)
    if(previousSessionCart.length === 0) return;

    dispatch({
      type: "SET_CART",
      payload: { cart: previousSessionCart }
    })
  }, [])

  return (
    <CartContext.Provider value={{ cart, findItem, cartItemsQuantity, addNewCartItem, removeCartItem, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  )
}