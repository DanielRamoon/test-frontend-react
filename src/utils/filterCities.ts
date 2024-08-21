import { City } from './../types/cities';

export const filterCities = (cities: City[], searchTerm: string) => {
  return cities.filter((city) =>
    city.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
