// src/components/Loader.tsx

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme'; // Caminho para o arquivo de tema

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const LoaderSpinner = styled.div`
  border: 8px solid ${(props) => props.theme.colors.border};
  border-top: 8px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader: React.FC = () => (
  <ThemeProvider theme={theme}>
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  </ThemeProvider>
);

export default Loader;
