import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { useShop } from '../../../../hooks/useShop';
import { Title } from '../../styles';
import { MethodsContainer, PaymentContent, PaymentMethod } from './styles';

export const PaymentData = () => {
  const { payment, setPaymentMethod } = useShop();

  return (
    <PaymentContent>
      <div>
        <Title>
          <CurrencyDollar
            size={24}
            color="#8047F8"
          />
          <div>
            <strong>Pagamento</strong>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Title>
        <MethodsContainer>
          <PaymentMethod
            type="button"
            isActive={payment.method == 'credit'}
            onClick={() => setPaymentMethod('credit')}>
            <CreditCard
              color="#8047F8"
              size={16}
            />
            Cartão de Crédito
          </PaymentMethod>
          <PaymentMethod
            type="button"
            isActive={payment.method == 'debit'}
            onClick={() => setPaymentMethod('debit')}>
            <Bank
              color="#8047F8"
              size={16}
            />
            Cartão de Débito
          </PaymentMethod>
          <PaymentMethod
            type="button"
            isActive={payment.method == 'money'}
            onClick={() => setPaymentMethod('money')}>
            <Money
              color="#8047F8"
              size={16}
            />
            Dinheiro
          </PaymentMethod>
        </MethodsContainer>
      </div>
    </PaymentContent>
  );
};
