import styled from 'styled-components';

export const CartDataContainer = styled.div`
  border-radius: 6px 44px !important;

  p,
  a {
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-inline: auto;
    border-radius: 6px;
    color: ${(props) => props.theme['white']};
    margin-top: 1.5rem;
    height: 3rem;
    padding-inline: 1rem;
    background: ${(props) => props.theme['yellow-500']};
    transition: background-color 0.3s;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.875rem;

    &:hover {
      background: ${(props) => props.theme['yellow-700']};
    }
  }

  & > div:last-child {
    padding-block: 1rem;

    div {
      display: flex;
      justify-content: space-between;
      margin-top: 0.875rem;

      span {
        color: ${(props) => props.theme['gray-700']};
      }

      strong {
        font-size: 1.3rem;
        color: ${(props) => props.theme['gray-800']};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-radius: 6px;
      color: ${(props) => props.theme['white']};
      margin-top: 1.5rem;
      height: 3rem;
      padding-inline: 1rem;
      border: 0;
      background: ${(props) => props.theme['yellow-500']};
      transition: background-color 0.3s;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.875rem;

      &:hover {
        background: ${(props) => props.theme['yellow-700']};
      }
    }
  }
`;
