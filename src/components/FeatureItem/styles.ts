import styled from 'styled-components'
import { ThemeType } from '../../@types/styles'

export const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 231px;

  p {
    font-size: 1rem;
  }
`

interface IconBoxProps {
  color: keyof ThemeType
}

export const IconBox = styled.div<IconBoxProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: ${(props) => props.theme['base-0']};

  background-color: ${(props) => props.theme[props.color]};
`
