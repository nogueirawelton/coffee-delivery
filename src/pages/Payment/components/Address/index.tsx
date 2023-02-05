import { MapPinLine } from 'phosphor-react';
import { useShop } from '../../../../hooks/useShop';
import { Title } from '../../styles';
import { AddressContent, AddressInputs } from './styles';

export const Address = () => {
  const { payment, setUf, setAddress } = useShop();

  async function handleSetCep(e: any) {
    const addressData = await (
      await fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
    ).json();

    const {
      cep,
      logradouro: street,
      complemento: complement,
      bairro: district,
      localidade: city,
      uf,
    } = addressData;

    setAddress({
      cep,
      street,
      district,
      complement,
      city,
      uf,
      number: '',
    });
  }

  return (
    <AddressContent>
      <Title>
        <MapPinLine
          size={24}
          color="#C47F17"
        />
        <div>
          <strong>Endereço de Entrega</strong>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Title>
      <AddressInputs>
        <input
          type="text"
          placeholder="CEP"
          defaultValue={payment.address.cep}
          onBlur={handleSetCep}
          required
        />
        <input
          type="text"
          placeholder="Rua"
          defaultValue={payment.address.street}
          required
        />
        <input
          type="text"
          placeholder="Número"
          defaultValue={payment.address.number}
          required
        />
        <div>
          <input
            type="text"
            placeholder="Complemento"
            defaultValue={payment.address.complement}
          />
          <i>Opcional</i>
        </div>
        <input
          type="text"
          placeholder="Bairro"
          defaultValue={payment.address.district}
          required
        />
        <input
          type="text"
          placeholder="Cidade"
          defaultValue={payment.address.city}
          required
        />
        <input
          type="text"
          placeholder="UF"
          defaultValue={payment.address.uf}
          required
          onChange={(e) => {
            setUf(e.target.value);
          }}
        />
      </AddressInputs>
    </AddressContent>
  );
};
