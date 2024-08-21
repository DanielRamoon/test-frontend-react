import React, { useState } from 'react';
import { Container, Box, Title } from '../styles/HomeStyles';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import CepInfo from '../components/cerinfo/CepInfo';
import { CepResponse } from '../types/cep';
import { Link } from 'react-router-dom';
import { formatCep } from '../utils/formatCep';

const Home: React.FC = () => {
  const [cep, setCep] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [cepInfo, setCepInfo] = useState<CepResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = formatCep(inputValue);
    setCep(formattedValue);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);
    setCepInfo(null);

    const cleanCep = cep.replace(/\D/g, '');

    const mockData: CepResponse = {
      cep: formatCep(cleanCep),
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107',
    };

    setTimeout(() => {
      setCepInfo(mockData);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <Box>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title>Buscador de Cep:</Title>
            <Input
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={handleInputChange}
            />
            <Button onClick={handleButtonClick}>Pesquisar</Button>
            {error && <p>{error}</p>}
            {cepInfo && (
              <>
                <CepInfo data={cepInfo} />
                <Link to={`/city-list`}>Ver todas as cidades do estado</Link>
              </>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
