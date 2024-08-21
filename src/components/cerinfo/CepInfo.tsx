// src/components/cerinfo/CepInfo.tsx

import React from 'react';
import { CepResponse } from '../../types/cep'; // Ajuste o caminho conforme necessário
import { CepInfoContainer } from '../../styles/HomeStyles'; // Ajuste o caminho conforme necessário

interface CepInfoProps {
  data: CepResponse | null;
}

const CepInfo: React.FC<CepInfoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <CepInfoContainer>
      <h2>Informações do CEP:</h2>
      <p>
        <strong>CEP:</strong> {data.cep}
      </p>
      <p>
        <strong>Endereço:</strong> {data.logradouro}
      </p>
      <p>
        <strong>Complemento:</strong> {data.complemento}
      </p>
      <p>
        <strong>Bairro:</strong> {data.bairro}
      </p>
      <p>
        <strong>Cidade:</strong> {data.localidade}
      </p>
      <p>
        <strong>Estado:</strong> {data.uf}
      </p>
      <p>
        <strong>IBGE:</strong> {data.ibge}
      </p>
      <p>
        <strong>GIA:</strong> {data.gia}
      </p>
      <p>
        <strong>DDD:</strong> {data.ddd}
      </p>
      <p>
        <strong>SIAFI:</strong> {data.siafi}
      </p>
    </CepInfoContainer>
  );
};

export default CepInfo;
