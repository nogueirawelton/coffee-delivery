import styled from 'styled-components';

interface PaymentMethodProps {
  isActive: boolean;
}

export const PaymentContent = styled.div``;

export const MethodsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PaymentMethod = styled.button<PaymentMethodProps>`
  display: flex;

  align-items: center;
  padding-inline: 1rem;
  height: 3rem;
  gap: 0.5rem;
  border: 0;
  border: 1px solid transparent;
  background: ${(props) =>
    props.isActive
      ? `${props.theme['purple-300']}`
      : `${props.theme['gray-400']}`};
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    flex: 1;
  }

  ${(props) =>
    props.isActive ? `border: 1px solid ${props.theme['purple-500']}` : ''}
`;
