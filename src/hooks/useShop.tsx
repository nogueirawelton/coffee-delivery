import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  AddToCartAction,
  ClearCartAction,
  EditItemAction,
  SetAddressAction,
  SetPaymentMethodAction,
  SetUfAction,
} from '../reducers/shop/actions';
import {
  Address,
  CartItem,
  Coffee,
  Payment,
  shopReducer,
} from '../reducers/shop/reducer';

interface ShopContextProps {
  children: ReactNode;
}

interface ShopContextData {
  coffees: Coffee[];
  cart: CartItem[];
  payment: Payment;
  addToCart: (cartItem: CartItem) => void;
  setUf: (uf: string) => void;
  setPaymentMethod: (paymentMethod: string) => void;
  setAddress: (address: Address) => void;
  editItem: (id: number, modify: 'add' | 'remove' | 'delete') => void;
  clearCart: () => void;
}

const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 3.5,
    tags: ['Tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 5,
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 6.29,
    tags: ['Tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5.47,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 7.55,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price:8.72,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 4.5,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 8.9,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 4.9,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 6.20,
    tags: ['Especial', 'Com Leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 5.5,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.5,
    tags: ['Especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 3.9,
    tags: ['Especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 7.43,
    tags: ['Especial', 'Alcoólico'],
  },
];

const shopContext = createContext({} as ShopContextData);

const defaultShopState = {
  cart: [],
  payment: {
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
    method: 'credit',
  },
};

export const ShopProvider = ({ children }: ShopContextProps) => {
  const [shopState, dispatch] = useReducer(
    shopReducer,
    defaultShopState,
    () => {
      const storagedShopState = localStorage.getItem(
        '@coffee-delivery:shop-state-1.0.0'
      );

      if (storagedShopState) {
        return JSON.parse(storagedShopState);
      } else {
        return defaultShopState;
      }
    }
  );

  useEffect(() => {
    const stringfiedState = JSON.stringify(shopState);

    localStorage.setItem('@coffee-delivery:shop-state-1.0.0', stringfiedState);
  }, [shopState]);

  const { cart, payment } = shopState;

  function addToCart(cartItem: CartItem) {
    dispatch(AddToCartAction(cartItem));
  }

  function setUf(uf: string) {
    dispatch(SetUfAction(uf));
  }

  function setPaymentMethod(paymentMethod: string) {
    dispatch(SetPaymentMethodAction(paymentMethod));
  }

  function setAddress(address: Address) {
    dispatch(SetAddressAction(address));
  }

  function editItem(id: number, modify: 'add' | 'remove' | 'delete') {
    dispatch(EditItemAction(id, modify));
  }

  function clearCart() {
    dispatch(ClearCartAction());
  }

  return (
    <shopContext.Provider
      value={{
        coffees,
        cart,
        payment,
        addToCart,
        setUf,
        setPaymentMethod,
        setAddress,
        editItem,
        clearCart,
      }}>
      {children}
    </shopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(shopContext);
};
