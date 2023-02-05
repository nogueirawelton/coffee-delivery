import { Minus, Plus, Trash } from 'phosphor-react';
import { useState } from 'react';
import slug from 'slug';
import { useShop } from '../../../../hooks/useShop';
import { CartItemContainer } from './styles';

interface CartItem {
  id: number;
  amount: number;
}

export const CartItem = ({ id, amount }: CartItem) => {
  const { coffees, editItem } = useShop();
  const [image, setImage] = useState('');

  const coffee = coffees.find((coffee) => coffee.id == id);

  const BrlFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  if (coffee) {
    import(`../../../../assets/${slug(coffee.name)}.png`).then((image) =>
      setImage(image.default)
    );

    return (
      <CartItemContainer>
        <img
          src={image}
          alt={coffee.name}
        />
        <div>
          <strong>{coffee.name}</strong>
          <div>
            <div>
              <button
                type="button"
                onClick={() => {
                  if (amount > 1) {
                    editItem(id, 'remove');
                  }
                }}>
                <Minus
                  size={24}
                  color="#8047F8"
                />
              </button>
              <span>{amount}</span>
              <button
                type="button"
                onClick={() => editItem(id, 'add')}>
                <Plus
                  size={24}
                  color="#8047F8"
                />
              </button>
            </div>
            <button
              type="button"
              onClick={() => editItem(id, 'delete')}>
              <Trash
                size={18}
                color="#8047F8"
              />
              Remover
            </button>
          </div>
        </div>
        <strong>{BrlFormatter.format(coffee.price * amount)}</strong>
      </CartItemContainer>
    );
  } else {
    return null;
  }
};
