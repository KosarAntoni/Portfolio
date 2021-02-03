import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  html {
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.backgroundMain};
  }

  body {
    font-size: 1.4rem;
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme.primary};
    padding-top: 7rem;
    width: 100%;
    overflow-x: hidden;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyle;
