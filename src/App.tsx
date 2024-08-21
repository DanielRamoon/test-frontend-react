import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppRoutes from './routes/routes';
import { CepProvider } from './contexts/CepContext';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CepProvider>
      <AppRoutes />
    </CepProvider>
  </ThemeProvider>
);

export default App;
