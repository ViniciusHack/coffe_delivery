import styled from 'styled-components'

export const CartSummaryContainer = styled.div``

export const TotalCalc = styled.div`
  display: grid;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
`

export const CalcItem = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-700']};
  }

  h3 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-800']};
  }
`
