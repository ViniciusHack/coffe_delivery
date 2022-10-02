import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  gap: 3.5rem;
  padding-top: 5.875rem;
  padding-bottom: 6.75rem;
`
export const Background = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['base-900']};
  }

  > p {
    font-size: 1.25rem;
    padding-top: 1rem;
  }
`

export const RightContent = styled.div``

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  padding-top: 4.125rem;
`
