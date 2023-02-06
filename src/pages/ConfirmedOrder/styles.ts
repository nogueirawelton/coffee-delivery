import styled from 'styled-components';

interface IconContainerProps {
  color: string;
}

export const ConfirmedOrderContainer = styled.div`
  max-width: 1600px;
  margin-inline: auto;
  padding-inline: 2rem;
  margin-top: 5rem;

  @media (min-width: 550px) {
    padding-inline: 5rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (min-width: 1280px) {
    padding-inline: 10rem;
  }

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 2rem;
    line-height: 2rem;
  }

  img {
    margin-top: 3rem;

    @media (min-width: 1024px) {
      animation: float 2s alternate infinite;
    }
  }

  strong {
    font-family: 'Roboto';
    font-weight: 500;
    color: ${(props) => props.theme['gray-800']};
  }

  span {
    color: ${(props) => props.theme['gray-700']};
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.125rem;
  }

  @keyframes float {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(48px);
    }
  }
`;

export const AddressBox = styled.div`
  margin-top: 2rem;
  border: 2px solid ${(props) => props.theme['purple-500']};
  border-radius: 6px 36px;
  padding: 2rem;
  max-width: 525px;

  & > div {
    display: flex;
    gap: 1rem;

    span {
      flex-shrink: 0;
    }

    & + div {
      margin-top: 1.5rem;
    }
  }

  span {
    display: block;
  }
`;

export const IconContainer = styled.span<IconContainerProps>`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${(props) => props.color};
  border-radius: 50%;
`;
