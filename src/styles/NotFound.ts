import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.primary};
  margin: 0;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  margin: 0;
  padding: 0 20px;
`;
