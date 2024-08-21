import { renderHook, act } from '@testing-library/react-hooks';
import useCep from '../hooks/useCep';
import { fetchCep } from '../api/cep';

jest.mock('../api/cep', () => ({
  fetchCep: jest.fn(),
}));

describe('useCep Hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('deve definir loading como true e false adequadamente', async () => {
    (fetchCep as jest.Mock).mockResolvedValue({
      cep: '48904057',
      state: 'BA',
      city: 'Juazeiro',
      neighborhood: 'Cajueiro',
      street: 'Rua Raul Nunes',
      service: 'open-cep',
    });

    const { result } = renderHook(() => useCep());

    act(() => {
      result.current.handleButtonClick();
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await result.current.handleButtonClick();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.cepInfo).toBeTruthy();
    expect(result.current.error).toBeNull();
  });

  it('deve definir um erro se fetchCep falhar', async () => {
    (fetchCep as jest.Mock).mockRejectedValue(new Error('Falha na API'));

    const { result } = renderHook(() => useCep());

    act(() => {
      result.current.handleButtonClick();
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await result.current.handleButtonClick();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.cepInfo).toBeNull();
    expect(result.current.error).toBe(
      'Erro ao buscar informações do CEP. Tente novamente.'
    );
  });
});
