import styled from 'styled-components';

interface PaymentMethodProps {
  isActive: boolean;
}

export const PaymentContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1600px;
  margin-inline: auto;
  gap: 3rem;
  padding-inline: 2rem;

  @media (min-width: 550px) {
    padding-inline: 5rem;
  }

  @media (min-width: 1280px) {
    padding-inline: 10rem;
    grid-template-columns: 1fr 450px;
  }
`;

const BaseContainer = styled.div`
  & > div {
    padding: 2rem 1rem;
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px;
    margin-top: 1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  margin-bottom: 1rem;

  svg {
    flex-shrink: 0;
  }

  strong {
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'Roboto';

    display: block;
  }

  p {
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const AddressContainer = styled(BaseContainer)`
  h2 {
    font-size: 1.125rem;
  }
`;

export const PaymentMethodContainer = styled(BaseContainer)``;

export const OrderContainer = styled(BaseContainer)``;
