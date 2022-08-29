import { createContext, ReactNode, useCallback, useReducer } from "react";
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
}

export type Cart = CartItem[]

export const CartContext = createContext({} as CartContextType);


export function CartProvider({ children }: CartProviderProps) {
  // TO DO: Implementar cart nos componentes (usar suas funções e variáveis...)
  // TO DO: Ver como trabalhar com o JSON Server? tipo salvar o item todo ou buscar do JSON server e só salvar o id?
  // TO DO: React Hook Form Implementation
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

  return (
    <CartContext.Provider value={{ cart, cartItemsQuantity, addNewCartItem, removeCartItem, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  )
}