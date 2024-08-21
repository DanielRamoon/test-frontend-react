import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  text-align: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

export const Box = styled.div`
  background-color: ${(props) => props.theme.colors.boxBackground};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 3%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  width: 60%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 5vw;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const CepInfoContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.boxBackground};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.text};
  max-width: 100%;
  overflow: hidden;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;
