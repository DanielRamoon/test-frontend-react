import { useContext } from 'react';
import { CepContextProps } from '../types/CepContextProps';
import { CepContext } from '../contexts/CepContext';

export const useCepContext = (): CepContextProps => {
  const context = useContext(CepContext);
  if (context === undefined) {
    throw new Error('useCepContext must be used within a CepProvider');
  }
  return context;
};
