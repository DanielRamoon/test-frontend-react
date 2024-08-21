import { useState } from 'react';
import { CepResponse } from '../types/cep';
import { fetchCep } from '../api/cep';
import { formatCep } from '../utils/formatCep';

function useCep() {
  const [cep, setCep] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [cepInfo, setCepInfo] = useState<CepResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);

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

    try {
      const data = await fetchCep(cleanCep);
      setCepInfo(data);
      setState(data.state);
    } catch (err) {
      console.error('Erro ao buscar informações do CEP:', err);
      setError('Erro ao buscar informações do CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    cep,
    handleInputChange,
    handleButtonClick,
    loading,
    cepInfo,
    error,
    state,
  };
}

export default useCep;
