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
  const { cart, payment, setUf } = useShop();

  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
    )
      .then((response) => response.json())
      .then((data) => setStates(data));
  }, []);

  const { address } = payment;

  function convertIdToUf(id: string) {
    const uf = states.find((state) => state.id == +id)?.sigla ?? '';
    setUf(uf);
  }

  const activeValue = address.uf
    ? String(states.find((state) => state.sigla == address.uf)?.id)
    : '';

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
          <Select.Root
            value={activeValue}
            onValueChange={convertIdToUf}>
            <StyledTrigger>
              <MapPin
                weight="fill"
                color="#8047F8"
                size={24}
              />
              <Select.Value />
            </StyledTrigger>
            <Select.Portal>
              <StyledContent>
                <Select.Viewport>
                  <Select.Group>
                    <StyledItem
                      value=""
                      hidden>
                      <Select.ItemText>Estado, UF</Select.ItemText>
                    </StyledItem>
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
            {!!cart.length && <span>{cart.length}</span>}
          </CartButton>
        </nav>
      </div>
    </HeaderContainer>
  );
};
