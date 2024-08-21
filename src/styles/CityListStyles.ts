import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  box-sizing: border-box;
`;

export const CityListTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const CityListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  border-radius: 10px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.border};

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CityItem = styled.li`
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const BackLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
