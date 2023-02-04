import styled from 'styled-components';

export const PaymentContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  max-width: 1600px;
  margin-inline: auto;
  padding-inline: 10rem;
  gap: 3rem;
`;

const BaseContainer = styled.div`
  & > div {
    padding: 2.5rem;
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px;
  }
`;

export const DataContainer = styled.div``;

export const AddressContainer = styled(BaseContainer)``;

export const AddressTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;

  strong {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: -5px;
    display: block;
  }
`;

export const AddressInputs = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 64px;
  gap: 1rem;

  input {
    height: 3rem;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-400']};
    padding-inline: 1rem;
    color: ${(props) => props.theme['gray-700']};

    &:placeholder {
      color: ${(props) => props.theme['gray-600']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-700']};
    }
  }

  input:nth-child(4) {
    grid-column: 2/4;
  }

  input:nth-child(2) {
    grid-column: 1/4;
  }
`;

export const PaymentMethodContainer = styled(BaseContainer)``;

export const OrderContainer = styled(BaseContainer)``;
