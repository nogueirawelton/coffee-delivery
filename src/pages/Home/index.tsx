import { Advantages, CoffeesContainer, HeroContainer } from './styles';

import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react';
import heroImg from '../../assets/hero.webp';
import { useShop } from '../../hooks/useShop';
import { Advantage } from './components/Advantage';
import { Coffee } from './components/Coffee';

export const Home = () => {
  const { coffees } = useShop();
  return (
    <main>
      <HeroContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <Advantages>
              <Advantage
                color="#C47F17"
                icon={
                  <ShoppingCart
                    size={18}
                    weight="fill"
                    color="#fafafa"
                  />
                }
                description="Compra simples e segura"
              />
              <Advantage
                color="#574F4D"
                icon={
                  <Package
                    size={18}
                    weight="fill"
                    color="#fafafa"
                  />
                }
                description="Entrega rápida e rastreada"
              />
              <Advantage
                color="#DBAC2C"
                icon={
                  <Timer
                    size={18}
                    weight="fill"
                    color="#fafafa"
                  />
                }
                description="Embalagem mantém o café intacto"
              />
              <Advantage
                color="#8047F8"
                icon={
                  <CoffeeIcon
                    size={18}
                    weight="fill"
                    color="#fafafa"
                  />
                }
                description="O café chega fresquinho até você"
              />
            </Advantages>
          </div>
          <div>
            <img
              src={heroImg}
              alt="Café"
            />
          </div>
        </div>
      </HeroContainer>
      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Coffee
              key={coffee.id}
              data={coffee}
            />
          ))}
        </div>
      </CoffeesContainer>
    </main>
  );
};
