import styled from 'styled-components';

interface AdvantageContainerProps {
  color: string;
}

export const AdvantageContainer = styled.div<AdvantageContainerProps>`
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;

    &:first-child {
      flex-shrink: 0;
      display: flex;
      width: 2rem;
      height: 2rem;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.color};
      border-radius: 50%;
    }
  }
`;
