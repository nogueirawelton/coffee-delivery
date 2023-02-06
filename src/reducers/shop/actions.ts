import { Address, CartItem } from './reducer';

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  SET_UF = 'SET_UF',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  SET_ADDRESS = 'SET_ADDRESS',
  EDIT_ITEM = 'EDIT_ITEM',
  CLEAR_CART = 'CLEAR_CART',
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

export function SetPaymentMethodAction(paymentMethod: string) {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  };
}

export function SetAddressAction(address: Address) {
  return {
    type: ActionTypes.SET_ADDRESS,
    payload: {
      address,
    },
  };
}

export function EditItemAction(
  id: number,
  modify: 'add' | 'remove' | 'delete'
) {
  return {
    type: ActionTypes.EDIT_ITEM,
    payload: {
      id,
      modify,
    },
  };
}

export function ClearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
