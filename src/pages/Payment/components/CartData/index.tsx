import { NavLink } from 'react-router-dom';
import { useShop } from '../../../../hooks/useShop';
import { BrlFormatter } from '../../../../utils/BlrPriceFormatter';
import { CartItem } from '../CartItem';
import { CartDataContainer } from './styles';

export const CartData = () => {
  const { cart, coffees } = useShop();

  const total = cart.reduce((acc, item) => {
    const coffee = coffees.find((coffee) => item.id == coffee.id);

    if (coffee) {
      return acc + coffee.price * item.amount;
    }

    return acc;
  }, 0);
  return (
    <CartDataContainer>
      {cart.length ? (
        <>
          <div>
            {cart.map(({ id, amount }) => (
              <CartItem
                key={id}
                id={id}
                amount={amount}
              />
            ))}
          </div>
          <div>
            <div>
              <span>Total de Itens</span>
              <span>{BrlFormatter.format(total)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{BrlFormatter.format(total + 3.5)}</strong>
            </div>
            <button type="submit">Confirmar pedido</button>
          </div>
        </>
      ) : (
        <div>
          <p>Nenhum café adicionado ainda :(</p>
          <NavLink to="/">Ir às compras</NavLink>
        </div>
      )}
    </CartDataContainer>
  );
};
