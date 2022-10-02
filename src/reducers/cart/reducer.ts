import { Cart } from "../../contexts/CartContext";
import { CartActionTypes } from "./actions";



export function cartReducer(state: Cart, action: any):Cart {
  switch (action.type) {
    case CartActionTypes.ADD_NEW_CART_ITEM:
      const itemAlreadyExists = state.find(item => item.id === action.payload.newItem.id);
      if(itemAlreadyExists) {
        return state.map(cartItem => {
          if(cartItem.id === action.payload.itemId) {
            cartItem.quantity = action.payload.newQuantity
          }
          return cartItem
        })
      }
      
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

    case CartActionTypes.SET_CART:
      return action.payload.cart;
    default:
      return state;
  }
}