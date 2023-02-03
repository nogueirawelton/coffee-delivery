import styled from 'styled-components';

export const CoffeeContainer = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1.5rem;
  padding-bottom: 2rem;

  & > img {
    transform: translateY(-20px);
  }

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    margin-top: 1rem;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
    margin-top: 0.5rem;
  }

  footer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    strong {
      font-size: 1.75rem;
      color: ${(props) => props.theme['gray-700']};

      small {
        font-size: 1rem;
        font-weight: 400;
        margin-right: 0.25rem;
      }
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & > button {
        border: 0;
        background: ${(props) => props.theme['purple-700']};
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 0.875rem;
        background: ${(props) => props.theme['gray-400']};
        height: 2.5rem;
        border-radius: 6px;
        padding-inline: 0.5rem;

        button {
          display: flex;
          width: 1.25rem;
          height: 2.5rem;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
        }
      }
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    display: block;
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-500']};
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.75rem;
    border-radius: 100px;
  }
`;
