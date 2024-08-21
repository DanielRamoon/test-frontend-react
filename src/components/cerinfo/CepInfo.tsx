import React from 'react';
import { CepResponse } from '../../types/cep';
import { CepInfoContainer } from '../../styles/HomeStyles';
import { formatCep } from '../../utils/formatCep';

interface CepInfoProps {
  data: CepResponse | null;
}

const CepInfo: React.FC<CepInfoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <CepInfoContainer>
      <h2>Informações do CEP:</h2>
      <p>
        <strong>CEP:</strong> {formatCep(data.cep)}
      </p>
      <p>
        <strong>Estado:</strong> {data.state}
      </p>
      <p>
        <strong>Cidade:</strong> {data.city}
      </p>
      <p>
        <strong>Bairro:</strong> {data.neighborhood}
      </p>
      <p>
        <strong>Rua:</strong> {data.street}
      </p>
      <p>
        <strong>Serviço:</strong> {data.service}
      </p>
    </CepInfoContainer>
  );
};

export default CepInfo;
