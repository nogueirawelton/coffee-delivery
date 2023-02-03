import { CartItem } from './reducer';

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
}

export function AddToCartAction(cartItem: CartItem) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      cartItem,
    },
  };
}
