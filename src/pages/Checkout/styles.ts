import { CurrencyDollar } from 'phosphor-react'
import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;
  padding-top: 2.5rem;
`

export const AddressForm = styled.section`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-200']};
  border-radius: 6px;
`

export const FormHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;

  font-size: 0.875rem;
  h4 {
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    padding-bottom: 2px;
  }
  p {
    color: ${(props) => props.theme['base-700']};
  }

  svg {
    color: ${(props) => props.theme['primary-700']};
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > span {
    font-size: 0.875rem;
    margin-top: -0.75rem;
    color: ${(props) => props.theme['secondary-400']};
  }
`

export const InputInLine = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    flex: 1;
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['secondary-400']};
    align-self: center;
  }
`

export const Text = styled.div``

export const Payment = styled.div`
  margin-top: 0.75rem;
  background: ${(props) => props.theme['base-200']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const CartItemsContainer = styled.div`
  width: 100%;
`

export const Content = styled.section`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-200']};
  border-radius: 6px 44px;
  width: 100%;
`

export const CurrencyDollarStyled = styled(CurrencyDollar)`
  color: ${(props) => props.theme['secondary-400']} !important;
`
