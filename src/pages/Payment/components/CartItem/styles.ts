import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  padding-block: 1.5rem;

  img {
    width: 72px;
    height: 72px;
  }

  & > div {
    strong {
      font-weight: 400;
      font-size: 1rem;
      font-family: 'Roboto';
      color: ${(props) => props.theme['gray-800']};
    }

    & > div {
      display: flex;
      margin-top: 0.5rem;
      gap: 0.5rem;

      & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: ${(props) => props.theme['gray-400']};
        height: 2rem;
        border-radius: 6px;
        padding-inline: 0.5rem;

        button {
          display: flex;
          width: 1rem;
          height: 2rem;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
        }
      }

      & > button {
        display: flex;
        padding-inline: 0.5rem;
        height: 2rem;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        border: 0;
        border-radius: 6px;
        text-transform: uppercase;
        font-size: 0.875rem;
        background: ${(props) => props.theme['gray-400']};
      }
    }
  }

  & > strong {
    margin-left: auto;
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.125rem;
  }
`;
