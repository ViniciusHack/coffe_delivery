import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${props => props.theme["base-100"]};
    color: ${props => props.theme["base-800"]}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    -webkit-fontsmoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
  }
  
  button {
    cursor: pointer;
  }
`