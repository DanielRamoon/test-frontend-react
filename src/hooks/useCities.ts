import { useState, useEffect } from 'react';
import { City } from '../types/cities';
import { fetchCities } from '../api/cities';

function useFetchCities(state: string) {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCityList = async () => {
      try {
        const cityList: City[] = await fetchCities(state);
        setCities(cityList);
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
