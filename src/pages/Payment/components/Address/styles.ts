import styled from 'styled-components';

export const AddressContent = styled.div``;

export const AddressInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-top: 0 !important;

  div {
    position: relative;

    input {
      padding-right: 5rem;
    }

    i {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.875rem;
      user-select: none;
      color: ${(props) => props.theme['gray-600']};
    }
  }

  @media (min-width: 550px) {
    grid-template-columns: 1fr 96px;

    input {
      grid-column: 1/3;

      &:nth-child(2) {
        grid-column: 1;
      }

      &:nth-child(3) {
        grid-column: 2;
      }

      &:nth-child(6) {
        grid-column: 1;
      }

      &:nth-child(7) {
        grid-column: 2;
      }
    }

    div {
      grid-column: 1/3;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 200px 1fr 64px;

    input {
      grid-column: auto;

      &:nth-child(3) {
        grid-column: auto;
      }

      &:nth-child(6) {
        grid-column: auto;
      }

      &:nth-child(7) {
        grid-column: auto;
      }

      &:nth-child(2) {
        grid-column: 1/4;
      }
    }

    div {
      grid-column: 2/4;
    }
  }

  input {
    height: 3rem;
    border-radius: 6px;
    border: 0;
    width: 100%;
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
`;
