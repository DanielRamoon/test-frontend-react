import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchCities from '../hooks/useCities';
import { filterCities } from '../utils/filterCities';
import {
  CityListContainer,
  CityListTitle,
  CityListWrapper,
  CityItem,
  BackLink,
} from '../styles/CityListStyles';
import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader';

const CityList: React.FC = () => {
  const { state } = useParams<{ state?: string }>();
  const { cities, loading, error } = useFetchCities(state || '');

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = filterCities(cities, searchTerm);

  return (
    <CityListContainer>
      <CityListTitle>Cidades de {state || 'Estado Desconhecido'}</CityListTitle>
      <SearchInput
        type="text"
        placeholder="Pesquisar cidade..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <CityListWrapper>
          {filteredCities.map((city, index) => (
            <CityItem key={index}>
              {city.nome} - Código:{' '}
              {city.codigo_ibge || 'código não disponível'}
            </CityItem>
          ))}
        </CityListWrapper>
      )}
      <BackLink to="/">Voltar</BackLink>
    </CityListContainer>
  );
};

export default CityList;
