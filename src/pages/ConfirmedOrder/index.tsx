import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useShop } from '../../hooks/useShop';
import { AddressBox, ConfirmedOrderContainer, IconContainer } from './styles';

import deliveryImage from '../../assets/delivery.svg';

export const ConfirmedOrder = () => {
  const {
    payment: { address, method },
  } = useShop();

  const paymentMethodMap = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    money: 'Dinheiro',
  };
  return (
    <ConfirmedOrderContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <AddressBox>
          <div>
            <IconContainer color="#8047F8">
              <MapPin
                weight="fill"
                color="#fff"
                size={20}
              />
            </IconContainer>
            <div>
              <span>
                Entrega em
                <strong>
                  {' '}
                  {address.street}, {address.number}
                </strong>
              </span>
              <span>
                {address.district} - {address.city}, {address.uf}
              </span>
            </div>
          </div>
          <div>
            <IconContainer color="#DBAC2C">
              <Timer
                weight="fill"
                color="#fff"
                size={20}
              />
            </IconContainer>
            <div>
              <span>Previsão de Entrega</span>
              <strong>20min - 30min</strong>
            </div>
          </div>
          <div>
            <IconContainer color="#C47F17">
              <CurrencyDollar
                weight="fill"
                color="#fff"
                size={20}
              />
            </IconContainer>
            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethodMap[method]}</strong>
            </div>
          </div>
        </AddressBox>
      </div>
      <img
        src={deliveryImage}
        alt="Pedido a caminho"
      />
    </ConfirmedOrderContainer>
  );
};
