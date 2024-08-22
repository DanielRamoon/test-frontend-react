import { useState, useEffect } from 'react';
import { City } from '../types/cities';
import { fetchCities } from '../api/cities';
import { fetchCep } from '../api/cep';

function useFetchCities(state: string) {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCityList = async () => {
      try {
        const cityList: City[] = await fetchCities(state);

        // Buscar CEP para cada cidade
        const citiesWithCep = await Promise.all(
          cityList.map(async (city) => {
            try {
              const cepData = await fetchCep(city.codigo_ibge);
              return { ...city, cep: cepData?.cep || 'CEP não disponível' };
            } catch (err) {
              console.error(
                `Erro ao buscar CEP para a cidade ${city.nome}:`,
                err
              );
              return { ...city, cep: 'CEP não disponível' };
            }
          })
        );

        setCities(citiesWithCep);
      } catch (err) {
        console.error('Erro ao buscar cidades:', err);
        setError('Erro ao buscar cidades. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchCityList();
  }, [state]);

  return { cities, loading, error };
}

export default useFetchCities;
