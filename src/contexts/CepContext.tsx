import React, { createContext, ReactNode } from 'react';
import { CepContextProps } from '../types/CepContextProps';
import useCep from '../hooks/useCep';

export const CepContext = createContext<CepContextProps | undefined>(undefined);

interface CepProviderProps {
  children: ReactNode;
}

export const CepProvider: React.FC<CepProviderProps> = ({ children }) => {
  const cepState = useCep();

  return <CepContext.Provider value={cepState}>{children}</CepContext.Provider>;
};
