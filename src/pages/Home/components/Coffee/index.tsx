import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import slug from 'slug';
import { useShop } from '../../../../hooks/useShop';
import { BrlFormatter } from '../../../../utils/BlrPriceFormatter';
import { CoffeeContainer, TagContainer } from './styles';
interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

interface CoffeeProps {
  data: Coffee;
}

export const Coffee = ({ data }: CoffeeProps) => {
  const { cart, addToCart } = useShop();
  const [image, setImage] = useState(null);
  const [amount, setAmount] = useState(
    cart.find((i) => data.id === i.id)?.amount ?? 0
  );

  import(`../../../../assets/${slug(data.name)}.png`).then((image) =>
    setImage(image.default)
  );

  function handleAddToCart() {
    if (amount) {
      addToCart({
        id: data.id,
        amount,
      });
      toast(
        `☕ ${
          amount > 1 ? 'Cafés adicionados' : 'Café adicionado'
        }  ao carrinho!`,
        {
          autoClose: 1500,
        }
      );
    }
  }

  return (
    <CoffeeContainer>
      {image && (
        <img
          src={image}
          alt={data.name}
        />
      )}
      <TagContainer>
        {data.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagContainer>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <footer>
        <strong>
          <small>R$</small>
          {BrlFormatter.format(data.price).slice(3)}
        </strong>
        <div>
          <div>
            <button
              onClick={() =>
                setAmount((state) => (state > 0 ? --state : state))
              }>
              <Minus
                size={24}
                color="#8047F8"
              />
            </button>
            <span>{amount}</span>
            <button onClick={() => setAmount((state) => ++state)}>
              <Plus
                size={24}
                color="#8047F8"
              />
            </button>
          </div>
          <button onClick={handleAddToCart}>
            <ShoppingCart
              weight="fill"
              size={24}
              color="#F3F2F2"
            />
          </button>
        </div>
      </footer>
    </CoffeeContainer>
  );
};
