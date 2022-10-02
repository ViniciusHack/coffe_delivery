import styled from 'styled-components'

export const CoffeeCartItemContainer = styled.div`
  hr {
    width: 100%;
    height: 0;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme['base-400']};
    margin: 1.5rem 0;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  h4 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;

    color: ${(props) => props.theme['base-800']};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
`

export const Price = styled.p`
  font-weight: 700;
  font-size: 1rem;

  color: ${(props) => props.theme['base-700']};
`
