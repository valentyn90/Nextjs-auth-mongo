import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const customButton = css`
  display: flex;
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.three};
  color: initial;
  padding: 1rem 1.8rem;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }): string => theme.colors.two};
  }
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
    border: none;
  }

`;
