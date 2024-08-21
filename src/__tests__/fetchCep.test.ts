import { fetchCep } from '../api/cep';

describe('fetchCep - Integração', () => {
  it('deve retornar dados do CEP com sucesso ao consultar a API real', async () => {
    const cep = '01311000'; // Utilize um CEP válido
    const result = await fetchCep(cep);

    // Verifique se os dados retornados contêm as propriedades esperadas
    expect(result).toHaveProperty('neighborhood');
    expect(result).toHaveProperty('city');
    expect(result).toHaveProperty('state');
    expect(result).toHaveProperty('street');
    expect(result).toHaveProperty('cep');
  });

  it('deve lançar um erro se o CEP for inválido', async () => {
    const invalidCep = '00000000';
    await expect(fetchCep(invalidCep)).rejects.toThrow(
      'Erro ao buscar informações do CEP'
    );
  });
});
