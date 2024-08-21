import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: ${theme.colors.secondary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  p {
    margin: 0 0 1rem 0;
  }

  ul, ol {
    padding-left: 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 0.5rem;
    border: 1px solid ${theme.colors.border};
  }

  input, textarea, select {
    font: inherit;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    font: inherit;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: ${theme.colors.secondary};
  }
`;
