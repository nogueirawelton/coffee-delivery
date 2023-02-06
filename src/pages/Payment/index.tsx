import { useNavigate } from 'react-router-dom';
import { useShop } from '../../hooks/useShop';
import { Address } from './components/Address';
import { CartData } from './components/CartData';
import { PaymentData } from './components/PaymentData';

import {
  AddressContainer,
  OrderContainer,
  PaymentContainer,
  PaymentMethodContainer,
} from './styles';

export const Payment = () => {
  const { setAddress, clearCart } = useShop();
  const navigate = useNavigate();

  function handleConfirmOrder(e: any) {
    e.preventDefault();

    const { cep, street, number, complement, district, city, uf } = e.target;

    setAddress({
      cep: cep.value,
      street: street.value,
      number: number.value,
      complement: complement.value,
      district: district.value,
      city: city.value,
      uf: uf.value,
    });

    clearCart();
    navigate('/confirmed-order');
  }

  return (
    <main>
      <PaymentContainer onSubmit={handleConfirmOrder}>
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
          <CartData />
        </OrderContainer>
      </PaymentContainer>
    </main>
  );
};
