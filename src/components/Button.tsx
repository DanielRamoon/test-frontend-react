import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 18px 30px;
  font-size: 22px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default Button;
