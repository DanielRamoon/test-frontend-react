import { CepResponse } from './cep';

export interface CepContextProps {
  cep: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  loading: boolean;
  cepInfo: CepResponse | null;
  error: string | null;
  state: string | null;
}
