import { CartItem } from './reducer';

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  SET_UF = 'SET_UF',
}

export function AddToCartAction(cartItem: CartItem) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      cartItem,
    },
  };
}

export function SetUfAction(uf: string) {
  return {
    type: ActionTypes.SET_UF,
    payload: {
      uf,
    },
  };
}
