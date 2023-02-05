import { NavLink } from 'react-router-dom';
import { useShop } from '../../hooks/useShop';
import { Address } from './components/Address';
import { CartItem } from './components/CartItem';
import { PaymentData } from './components/PaymentData';

import {
  AddressContainer,
  OrderContainer,
  PaymentContainer,
  PaymentMethodContainer,
} from './styles';

export const Payment = () => {
  const { cart } = useShop();

  return (
    <main>
      <PaymentContainer>
        <div>
          <AddressContainer>
            <h2>Complete seu pedido</h2>
            <Address />
          </AddressContainer>
          <PaymentMethodContainer>
            <PaymentData />
          </PaymentMethodContainer>
        </div>
        <OrderContainer>
          <h2>Cafés Selecionados</h2>
          <div>
            {cart.length ? (
              <div>
                {cart.map(({ id, amount }) => (
                  <CartItem
                    key={id}
                    id={id}
                    amount={amount}
                  />
                ))}
              </div>
            ) : (
              <div>
                <p>Nenhum café adicionado ainda :(</p>
                <NavLink to="/">Ir às compras</NavLink>
              </div>
            )}
          </div>
        </OrderContainer>
      </PaymentContainer>
    </main>
  );
};
