import styled from 'styled-components'

interface AmountContainerProps {
  size: 'sm' | 'md'
}

export const AmountContainer = styled.div<AmountContainerProps>`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  user-select: none;

  border-radius: 6px;
  background: ${(props) => props.theme['base-400']};

  padding: ${(props) => (props.size === 'sm' ? '0.34375rem' : '0.53125rem')}
    0.5rem;

  button {
    display: flex;
    background: transparent;
    border: 0;
    outline: 0;
    color: ${(props) => props.theme['secondary-400']};
  }

  span {
    color: ${(props) => props.theme['base-900']};
  }
`
