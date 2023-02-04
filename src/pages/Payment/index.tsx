import { MapPinLine } from 'phosphor-react';
import { useShop } from '../../hooks/useShop';
import {
  AddressContainer,
  AddressInputs,
  AddressTitle,
  DataContainer,
  OrderContainer,
  PaymentContainer,
  PaymentMethodContainer,
} from './styles';

export const Payment = () => {
  const { payment, setUf } = useShop();
  return (
    <main>
      <PaymentContainer>
        <DataContainer>
          <AddressContainer>
            <h2>Complete seu pedido</h2>
            <AddressTitle>
              <MapPinLine
                size={24}
                color="#C47F17"
              />
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressTitle>
            <AddressInputs>
              <input
                type="text"
                placeholder="CEP"
              />
              <input
                type="text"
                placeholder="Rua"
              />
              <input
                type="text"
                placeholder="Número"
              />
              <input
                type="text"
                placeholder="Complemento"
              />
              <input
                type="text"
                placeholder="Bairro"
              />
              <input
                type="text"
                placeholder="Cidade"
              />
              <input
                type="text"
                value={payment.address.uf}
                onChange={(e) => setUf(e.target.value.toUpperCase())}
                placeholder="UF"
              />
            </AddressInputs>
          </AddressContainer>
          <PaymentMethodContainer></PaymentMethodContainer>
        </DataContainer>
        <OrderContainer>
          <h2>Cafés Selecionados</h2>
        </OrderContainer>
      </PaymentContainer>
    </main>
  );
};
