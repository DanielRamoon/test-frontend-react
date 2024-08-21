import React from 'react';
import { Container, Box, Title } from '../styles/HomeStyles';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import CepInfo from '../components/cerinfo/CepInfo';
import { Link } from 'react-router-dom';
import { useCepContext } from '../hooks/useCepContext';

const Home: React.FC = () => {
  const {
    cep,
    handleInputChange,
    handleButtonClick,
    loading,
    cepInfo,
    error,
    state,
  } = useCepContext();

  return (
    <Container>
      <Box>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title>Buscador de CEP</Title>
            <Input
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={handleInputChange}
              aria-label="Campo de entrada de CEP"
            />
            <Button onClick={handleButtonClick} disabled={loading}>
              {loading ? 'Pesquisando...' : 'Pesquisar'}
            </Button>
            {error && <p role="alert">{error}</p>}
            {cepInfo && (
              <>
                <CepInfo data={cepInfo} />
                {state && (
                  <Link
                    to={`/city-list/${state}`}
                    aria-label={`Ver cidades do estado ${state}`}
                  >
                    Ver todas as cidades do estado
                  </Link>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
