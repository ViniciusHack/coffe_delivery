export interface CartItem {
  id: number;
  title: string;
  quantity: number;
  imageUrl: string;
  price_on_cents: number;
}

export enum CartActionTypes {
  ADD_NEW_CART_ITEM = 'ADD_NEW_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY',
}

export function addNewCartItemAction(newItem: CartItem) {
  if(newItem.quantity === 0) {
    return removeCartItemAction(newItem.id)
  }

  return {
    type: CartActionTypes.ADD_NEW_CART_ITEM,
    payload: {
      newItem,
    }
  }
}

export function removeCartItemAction(itemId: number) {
  return {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: {
      itemId,
    }
  }
}

export function updateCartItemQuantityAction(itemId: number, newQuantity: number) {
  return {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: {
      itemId,
      newQuantity
    }
  }
}