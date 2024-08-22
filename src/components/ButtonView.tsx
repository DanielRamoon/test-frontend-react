import styled from 'styled-components';

const ButtonView = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textButton};
  border: none;
  padding: 4px 8px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default ButtonView;
