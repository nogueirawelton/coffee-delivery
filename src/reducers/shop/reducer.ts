import { produce } from 'immer';
import { ActionTypes } from './actions';

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export interface CartItem {
  id: number;
  amount: number;
}

interface Address {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  uf: string;
}

export interface Payment {
  address: Address;
  method: 'credit' | `debit` | `money`;
}

interface ShopState {
  cart: CartItem[];
  payment: Payment;
}

export function shopReducer(state: ShopState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return produce(state, (draft) => {
        const cartItemExists = state.cart.findIndex(
          (i) => i.id == action.payload.cartItem.id
        );

        if (cartItemExists < 0) {
          draft.cart.push(action.payload.cartItem);
        } else {
          draft.cart[cartItemExists].amount = action.payload.cartItem.amount;
        }
      });
    }
    case ActionTypes.SET_UF: {
      return produce(state, (draft) => {
        draft.payment.address.uf = action.payload.uf;
      });
    }
    default:
      return state;
  }
}
