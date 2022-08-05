import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  background: ${props => props.theme['base-100']};
  
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: .75rem;

  button {
    flex: 0;
  }

  button:first-child{
    flex: 1;
  }
`
