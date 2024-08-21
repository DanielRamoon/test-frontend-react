import axios from 'axios';
import { CepResponse } from '../types/cep';
import { API_CONFIG } from './config/config';

const { BASE_URL_CEP } = API_CONFIG;

export const fetchCep = async (cep: string): Promise<CepResponse> => {
  try {
    const response = await axios.get<CepResponse>(`${BASE_URL_CEP}/${cep}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar informações do CEP:', error.message);
    } else {
      console.error('Erro desconhecido:', error);
    }
    throw new Error(
      'Erro ao buscar informações do CEP. Verifique o console para mais detalhes.'
    );
  }
};
