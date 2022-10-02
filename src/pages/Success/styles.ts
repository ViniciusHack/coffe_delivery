import styled from 'styled-components'

export const SuccessContainer = styled.main`
  padding-top: 5rem;

  h1 {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['primary-700']};
  }

  > p {
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 1.75rem;

    color: ${(props) => props.theme['base-800']};
  }
`

export const Content = styled.div`
  display: flex;

  align-items: center;
  gap: 6.375rem;
`

export const OrderInfo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-100']};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: ${(props) =>
      `linear-gradient(to right, ${props.theme['primary-400']}, ${props.theme['secondary-400']})`};
  }
`
