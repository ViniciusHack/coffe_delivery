import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2.5rem;
  
  h3 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const FormContainer = styled.section`
`

export const FormContent = styled.form`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${props => props.theme['base-200']};
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
    color: ${props => props.theme['base-700']}
  }

  svg {
    color: ${props => props.theme['primary-700']};
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputInLine = styled.div`
  display: flex;
  gap: 0.75rem;
  
  div {
    flex: 1;
  }
`

export const Text = styled.div`

`

export const Payment = styled.div`
  margin-top: 0.75rem;
  background: ${props => props.theme['base-200']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const PaymentMethod = styled.div`
  display: grid;
  gap: .75rem;

  grid-template-columns: repeat(3, 1fr);
`

export const CartItemsContainer = styled.div`
  width: 100%;
`

export const Content = styled.section`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${props => props.theme['base-200']};
  border-radius: 6px 44px;
  width: 100%;
`

export const TotalCalc = styled.div`
  display: grid;
  gap: .75rem;
  padding-bottom: 1.5rem;
`

export const CalcItem = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1rem;
    color: ${props => props.theme['base-700']};
  }

  h3 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.25rem;

    color: ${props => props.theme['base-800']};
  }
`