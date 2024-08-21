import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchCities from '../hooks/useCities';
import {
  CityListContainer,
  CityListTitle,
  CityListWrapper,
  CityItem,
  BackLink,
} from '../styles/CityListStyles';

const CityList: React.FC = () => {
  const { state } = useParams<{ state?: string }>();
  const { cities, loading, error } = useFetchCities(state || '');

  return (
    <CityListContainer>
      <CityListTitle>Cidades de {state || 'Estado Desconhecido'}</CityListTitle>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <CityListWrapper>
          {cities.map((city, index) => (
            <CityItem key={index}>{city.nome}</CityItem>
          ))}
        </CityListWrapper>
      )}
      <BackLink to="/">Voltar</BackLink>
    </CityListContainer>
  );
};

export default CityList;
