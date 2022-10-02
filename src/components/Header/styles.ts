import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  background: ${(props) => props.theme['base-100']};

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    flex: 0;
  }

  button:first-child {
    flex: 1;
  }
`

export const CartButtonContainer = styled.div`
  position: relative;
`

export const CartItemQuantityIndicator = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  background: ${(props) => props.theme['primary-700']};
  color: ${(props) => props.theme['base-0']};

  display: grid;
  place-items: center;

  border-radius: 100%;

  position: absolute;
  top: -25%;
  right: -25%;

  span {
    font-weight: 700;
    font-size: 0.75rem;
  }
`
