export interface CepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface CepState {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  loading: boolean;
  error: string | null;
}

export type CepAction =
  | { type: 'FETCH_SUCCESS'; payload: CepResponse }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

export interface CepContextType {
  state: CepState;
  dispatch: React.Dispatch<CepAction>;
}
