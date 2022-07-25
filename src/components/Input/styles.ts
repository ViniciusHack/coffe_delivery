import styled from 'styled-components';

interface InputContainer {
  width?: string;
}

export const InputContainer = styled.div<InputContainer>`
  position: relative;
  width: ${props => props.width ? props.width : '100%'};
  max-width: ${props => props.width ? props.width : '100%'};

  span {
    position: absolute;
    right: 0;
    padding: 13px 0.75rem;
    font-style: italic;
    font-size: 0.75rem;
    color: ${props => props.theme['base-600']};
    pointer-events: none; 
  }
`;

export const InputStyle = styled.input`
  padding: 0.75rem;
  color: ${props => props.theme['base-700']};
  background: ${props => props.theme['base-300']};
  border: 1px solid ${props => props.theme['base-400']};
  border-radius: 4px;
  font-size: 0.875rem;
  width: 100%;

  :focus {
    border-color: ${props => props.theme['primary-700']};
  }
  ::placeholder {
    color: ${props => props.theme['base-600']};
  }
`;
