import styled from 'styled-components';

const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  width: 50%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary}80;
  }
`;

export default SearchInput;
