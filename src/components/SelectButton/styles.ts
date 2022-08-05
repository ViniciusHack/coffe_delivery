import styled, { css } from "styled-components";

interface SelectButtonContainerProps {
  selected: boolean;
}

export const SelectButtonContainer = styled.button<SelectButtonContainerProps>`
  text-transform: uppercase;

  background-color: ${props => props.theme["base-400"]};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.8125rem;
  padding: 1rem;
  transition: background-color .1s;

  border: 0;

  p {
    font-weight: 400;
    font-size: .75rem;
    line-height: 160%;

    text-transform: uppercase;
    color: ${props => props.theme["base-700"]};
  }

  svg {
    color: ${props => props.theme["secondary-400"]};
  }

  :hover {
    background-color: ${props => props.theme["base-500"]};
  }

  ${props => props.selected && css`
    background-color: ${props => props.theme["secondary-100"]};
    border: 1px solid ${props => props.theme["secondary-400"]}
  `}
`