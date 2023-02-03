import * as Select from '@radix-ui/react-select';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { useShop } from '../../hooks/useShop';
import {
  CartButton,
  HeaderContainer,
  StyledContent,
  StyledItem,
  StyledTrigger,
} from './styles';

interface State {
  id: number;
  sigla: string;
  nome: string;
}

export const Header = () => {
  const [states, setStates] = useState<State[]>([]);
  const { cart } = useShop();
  
  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
    )
      .then((response) => response.json())
      .then((data) => setStates(data));
  }, []);

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img
            src={logoImg}
            alt="Delivery de Cafés"
          />
        </NavLink>

        <nav>
          <Select.Root>
            <StyledTrigger>
              <MapPin
                weight="fill"
                color="#8047F8"
                size={24}
              />
              <Select.Value placeholder="Estado, UF" />
            </StyledTrigger>
            <Select.Portal>
              <StyledContent>
                <Select.Viewport>
                  <Select.Group>
                    {states.length &&
                      states.map((state) => (
                        <StyledItem
                          key={state.id}
                          value={String(state.id)}>
                          <Select.ItemText>
                            {state.nome}, {state.sigla}
                          </Select.ItemText>
                        </StyledItem>
                      ))}
                  </Select.Group>
                </Select.Viewport>
              </StyledContent>
            </Select.Portal>
          </Select.Root>
          <CartButton>
            <NavLink to="/payment">
              <ShoppingCart
                weight="fill"
                size={24}
                color="#C47F17"
              />
            </NavLink>
            <span>{cart.length}</span>
          </CartButton>
        </nav>
      </div>
    </HeaderContainer>
  );
};
