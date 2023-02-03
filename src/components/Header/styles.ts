import styled from 'styled-components';

import { Content, Item, Trigger } from '@radix-ui/react-select';

export const HeaderContainer = styled.header`
  padding-block: 2rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1600px;
    margin-inline: auto;
    padding-inline: 1.5rem;
    @media (min-width: 550px) {
      padding-inline: 5rem;
    }

    @media (min-width: 1024px) {
      padding-inline: 10rem;
    }
  }

  nav {
    display: flex;
    gap: 0.875rem;
  }
`;

export const StyledTrigger = styled(Trigger)`
  border: none;
  height: 2.5rem;
  padding-inline: 0.5rem;
  border-radius: 6px;
  gap: 0.5rem;
  align-items: center;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};
  display: none;

  @media (min-width: 425px) {
    display: flex;
  }
`;

export const StyledContent = styled(Content)`
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};
  padding: 0.5rem;
`;

export const StyledItem = styled(Item)`
  user-select: none;
  padding: 0.25rem;
  border-radius: 3px;

  &[data-highlighted] {
    outline: 0;
    border: 0;
    box-shadow: none;
    background: ${(props) => props.theme['gray-100']};
  }
`;

export const CartButton = styled.div`
  position: relative;

  a {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-300']};
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
