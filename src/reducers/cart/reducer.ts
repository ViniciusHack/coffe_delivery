import { Cart } from "../../contexts/CartContext";
import { CartActionTypes } from "./actions";



export function cartReducer(state: Cart, action: any) {
  switch (action) {
    case CartActionTypes.ADD_NEW_CART_ITEM:
      return [...state, action.payload.newItem];
    
    case CartActionTypes.REMOVE_CART_ITEM:
      return state.filter(cartItem => cartItem.id !== action.payload.itemId);
    
    case CartActionTypes.UPDATE_CART_ITEM_QUANTITY:
      return state.map(cartItem => {
        if(cartItem.id === action.payload.itemId) {
          cartItem.quantity = action.payload.newQuantity
        }
        return cartItem
      })
    default:
      return state;
  }
}