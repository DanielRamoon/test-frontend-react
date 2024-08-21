import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppRoutes from './routes/routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppRoutes />
  </ThemeProvider>
);

export default App;
