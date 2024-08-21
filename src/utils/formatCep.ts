export const formatCep = (cep: string): string => {
  const cleanCep = cep.replace(/\D/g, '');

  if (cleanCep.length === 8) {
    return `${cleanCep.slice(0, 5)}-${cleanCep.slice(5)}`;
  }

  return cep;
};
