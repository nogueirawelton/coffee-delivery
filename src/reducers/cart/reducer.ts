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

interface CartState {
  cart: CartItem[];
}

export function cartReducer(state: CartState, action: any) {
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
    default:
      return state;
  }
}
