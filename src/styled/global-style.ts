import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const customButton = css`
  background-color: ${({ theme }): string => theme.colors.three};
  color: initial;
  padding: 1rem 1.8rem;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}


  a:link, a:visited {
    ${customButton}
  }

  a:hover, a:active {
    background-color: ${({ theme }): string => theme.colors.two};
  }

  button {
    ${customButton}
    cursor: pointer;
    border: none;
  }

  button:hover {
    background-color: ${({ theme }): string => theme.colors.two};
  }
`;
