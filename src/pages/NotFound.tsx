import React from 'react';
import { Container, Title, Message } from '../styles/NotFound';
const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>
        Oops! A página que você está procurando não foi encontrada.
      </Message>
    </Container>
  );
};

export default NotFound;
