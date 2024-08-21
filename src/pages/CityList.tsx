import React from 'react';
import {
  CityListContainer,
  CityListTitle,
  CityListWrapper,
  CityItem,
  BackLink,
} from '../styles/CityListStyles';

const cities = [
  'São Paulo',
  'Campinas',
  'Santos',
  'São José dos Campos',
  'Ribeirão Preto',
  'Sorocaba',
  'Osasco',
  'Mogi das Cruzes',
  'Bauru',
  'Piracicaba',
  'Guarulhos',
  'Jundiaí',
];

const CityList: React.FC = () => {
  return (
    <CityListContainer>
      <CityListTitle>Cidades de São Paulo</CityListTitle>
      <CityListWrapper>
        {cities.map((city, index) => (
          <CityItem key={index}>{city}</CityItem>
        ))}
      </CityListWrapper>
      <BackLink to="/">Voltar</BackLink>
    </CityListContainer>
  );
};

export default CityList;
