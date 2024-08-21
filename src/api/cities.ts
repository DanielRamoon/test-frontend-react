import axios from 'axios';
import { API_CONFIG } from './config/config';

const { BASE_URL_CITIES } = API_CONFIG;

export const fetchCities = async (state: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL_CITIES}/${state}?providers=dados-abertos-br,gov,wikipedia`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar informações das cidades:', error.message);
    } else {
      console.error('Erro desconhecido:', error);
    }
    throw new Error(
      'Erro ao buscar informações das cidades. Verifique o console para mais detalhes.'
    );
  }
};
